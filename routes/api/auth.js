const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cors = require("cors");
const User = require("../../model/User");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

router.use(cors());

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // simple validation
  if (!email || !password) {
    return res.status(400).json("please enter all fields");
  }

  //check user existing ?

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User Does not exist" });

    // // creating salt & hash////
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

//  @route POST api/auth
//  @desc Get user data
//  @access Private

router.get("/user", auth, async (req, res) => {
  try {
    console.log(res.user.id);
    const user = await User.findById(res.user.id).select("-password");
    if (!user) throw Error("User does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.get("/map", auth, async (req, res) => {
  try {
    console.log(res.user.id);
    const user = await User.findById(res.user.id).select("-password");
    //   .select('-name').select('-email').select('-register_date').select('-_id').select('-__v');
    if (!user) throw Error("User does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

//////@route POST api/items
//  @desc Create an Item
//  @access Private
router.post("/map", async (req, res) => {
  const token = req.header("x-auth-token");
  console.log(token, "this is token");
  if (!token) return res.json(false);

  const verified = jwt.verify(token, config.get("jwtSecret"));
  console.log(verified.id, "verified");

  try {
    let { mapData } = req.body;
    console.log(mapData, "this is mapData");
    const mapdata = await User.findById(verified.id);
    console.log(mapdata, "this is new mapdata");
    // validate

    mapdata.mapData.push(mapData);
    mapdata.$set({
      mapData: mapdata.mapData,
    });
    mapdata.save();
    if (!mapData)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    res.json(mapdata);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const cors = require("cors");
const Item = require("../../model/Item");
const auth = require("../../middleware/auth");
router.use(cors());
const jwt = require("jsonwebtoken");
const config = require("config");

//  @route GET api/items
//  @desc Auth user
//  @access Public
router.get("/:id", (req, res) => {
  Item.find(   { "userId":req.params.id } 
)
   .then((data) => {
      res.json(data);
      console.log(data,'datttttttttttaaaaa');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  Item.find()
    .sort({ date2: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//  @route POST api/items
//  @desc Create an Item
//  @access Privat
router.post("/", (req, res) => {
  var d = new Date();
  var date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

  var n = d.toLocaleString();
  console.log(date, "date");
  const newItems = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    date: date,
    img: req.body.img,
    userId:req.body.userId
  });
  console.log(newItems);
  newItems.save().then((item) => res.json(item));
});

////

//  @route Delete api/items
//  @desc Delete a Items
//  @access Private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id).then((item) => {
    item
      .remove()
      .then(() => {
        res.json({ success: true });
      })
      .catch((err) => {
        res.status(404).json({ success: false });
      });
  });
});

router.post("/:id", function (req, res) {
  console.log(req.body.quantity);
  Item.updateOne(
    { _id: req.params.id },
    { $set: { quantity: req.body.quantity, img: req.body.img } }
  )
    .then(function (result) {
      res.status(200).json(result);
    })
    .catch(function (reserr) {
      console.log(reserr);
    });
});

module.exports = router;

const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs")
const bodyParser = require('body-parser')
const jsonparser = bodyParser.json()
const cors = require("cors")
const User = require("../../model/User");
const config = require('config')
const jwt = require('jsonwebtoken')
router.use(cors())

router.post('/', jsonparser, (req, res) => {
    const { name, email, password } = req.body;

    // simple validation
    if (!name || !email || !password) {
        return res.status(400).json("please enter all fields")
    };

    //check user existing ?

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exist' });

            const newUser = new User({
                name,
                email,
                password
            })

            // // creating salt & hash////

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign({ id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 }, (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    })
                                })
                        })
                })
            })
        })
})

module.exports = router;
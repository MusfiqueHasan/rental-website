const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../DB/Connection');
const User = require('../model/UserSchema')
const authentication = require('../middleware/authentication')



router.get('/', (req, res) => {
    res.send(`Hellow World this is home page from router`);
});

router.post('/register', async (req, res) => {

    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: `fill the required data` });
    }
    try {


        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: `Email already exist ` });
        } else if (password != cpassword) {
            return res.status(422).json({ error: `password is not maching ` });
        } else {
            const user = new User({ name, email, password, cpassword });

            await user.save();
            res.status(201).json({ message: `User registered sucssesfully` });

        }


    } catch (err) {
        console.log(err)
    }
});

router.post('/signin', async (req, res) => {

    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: `fill the required data` });
        }
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            res.cookie("rentalToken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true

            })
            if (isMatch) {
                res.json({ message: `user login successfully` });

            } else {

                res.status(400).json({ err: `error login 1` });
            }

        } else {
            res.status(400).json({ err: `error login` });
        }



    } catch (error) {
        console.log(error)
    }

})

router.get('/about', authentication, (req, res) => {
    res.send(req.rootUser);
});



module.exports = router;
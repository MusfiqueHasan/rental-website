const express = require('express');
const router = express.Router();
require('../DB/Connection');
const User = require('../model/UserSchema')



router.get('/', (req,res) =>{
    res.send(`Hellow World this is home page from router`);
});

router.post('/register', async (req, res)=>{

    const { name,email, password, cpassword }=req.body;
    if( !name ||!email ||! password || !cpassword){
        return res.status(422).json({error:`fill the required data`});
    }
    try {

            const userExist = await User.findOne({email:email});
             if(userExist){
                 return res.status(422).json({error:`Email already exist `});
                }
            const user = new User({ name, email, password, cpassword});
          
            await user.save();
            res.status(201).json({message : `User registered sucssesfully`});

    } catch (err) {
        console.log(err) 
    }
   

});

module.exports = router;
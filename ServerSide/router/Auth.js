const express = require('express');
const router = express.Router();
require('../DB/Connection');
const User = require('../model/UserSchema')
router.get('/', (req,res) =>{
    res.send(`Hellow World this is home page from router`);
});

router.post('/register', (req, res)=>{

    const { name,email, password, cpassword }=req.body;
    if( !name ||!email ||! password || !cpassword){
        return res.status(422).json({error:`fill the required data`});
    }

    User.findOne({email:email})
    .then((userExist) => {
         if(userExist)
         {return res.status(422).json({error:`Email already exist `});}

         const user = new User({ name, email, password, cpassword})

         user.save().then(()=>{
             res.status(201).json({message:`user is registered`})
         }).catch(()=>{
             res.status(500).json({error:`user is not registered `})
         })
        
    }).catch((err) => {
        console.log(err);
    });

});

module.exports = router;
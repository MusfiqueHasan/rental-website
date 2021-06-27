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
                }else if (password != cpassword) {
                    return res.status(422).json({error:`password is not maching `});
                }else{
                    const user = new User({ name, email, password, cpassword});
          
                    await user.save();
                    res.status(201).json({message : `User registered sucssesfully`});

                }
          

    } catch (err) {
        console.log(err) 
    }
});

router.post('/signin', async (req,res)=>{

    try {

        const {email, password} = req.body;
        if( !email || !password ){
            return res.status(400).json({error:`fill the required data`});
        }
        const userLogin = await User.findOne({email:email});

        if (!userLogin) {
            res.status(400).json({err:`error login`})
            
        } else {
            res.json({message:`user login successfully`})
        }
        
    } catch (error) {
        console.log(error)  
      }
   
})



module.exports = router;
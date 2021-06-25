const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send(`Hellow World this is home page from router`);
});

router.post('/register', (req, res)=>{
    console.log(req.body);
    res.json({message:req.body});
});

module.exports = router;
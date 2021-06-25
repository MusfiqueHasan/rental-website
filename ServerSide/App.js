const dotenv = require('dotenv');
// const mongoose = require('mongoose')
const express = require('express');
const app = express();
dotenv.config({path:'./config.env'}); 
require('./DB/Connection');
// const User =require('./model/UserSchema');
app.use(express.json());
app.use(require('./router/Auth.js')); 

const PORT = process.env.PORT;



const middleware = (req,res,next)=>{
    console.log(`Hellow middleware`);
    next();
}


// app.get('/', (req,res) =>{
//     res.send(`Hellow World this is home page from app`);
// });
app.get('/about', middleware, (req,res) =>{
    res.send(`Hellow World this is about page`);
});
app.get('/contact', (req,res) =>{
    res.send(`Hellow World this is contact page`);
});
app.listen(PORT, () => {
    console.log(`Now server is running at port ${PORT}`);
}) 
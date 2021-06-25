const mongoose = require('mongoose')
const express = require('express');
const app = express();
const DB = 'mongodb+srv://musfique:rentalweb@cluster0.rdfrd.mongodb.net/rental-db?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:false
    
}).then( ()=>{
    console.log(`connection succesful`);
}).catch((err)=>{
    console.log(`Error connection`);
})


const middleware = (req,res,next)=>{
    console.log(`Hellow middleware`);
    next();
}


app.get('/', (req,res) =>{
    res.send(`Hellow World this is home page`);
});
app.get('/about', middleware, (req,res) =>{
    res.send(`Hellow World this is about page`);
});
app.get('/contact', (req,res) =>{
    res.send(`Hellow World this is contact page`);
});
app.listen(3000, () => {
    console.log(`Now server is runnig at port 3000`);
})
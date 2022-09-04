const express = require("express");
const app=express();
const compression = require("compression");
const {auth}=require('./mw')
require('dotenv').config()
const cookieParser = require('cookie-parser');

const router=require('./routers')
const port =process.env.PORT||5000
app.set('port', port);
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(auth.auth)
app.use('/user',(req,res,next)=>{
  if(req.user){
    res.json(req.user)
  }else{
    res.json({msg:"user is not"})
  }
  next()
})
const path = require('path');



app.use(express.static(path.join(__dirname, '..', 'client')))


app.use(router)

app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname, '..', 'client','errorPage','404.html'))

})
app.use((err,req,res,next)=>{
  res.status(500).send('server not found')
})
module.exports=app


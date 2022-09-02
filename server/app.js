const express = require("express");
const app=express();

const { join } = require("path");
const compression = require("compression");
require('dotenv').config()

const router=require('./routers')
const port =process.env.PORT||5000
app.set('port', port);
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());

const cookieParser = require('cookie-parser');
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client'))
})
app.use(express.static(path.join(__dirname, '..', 'client')))


app.use(router)
module.exports=app


const {getAllPosts}=require('../controlers')
const router = require('express').Router();

router.get('/get-posts',getAllPosts);

module.exports=router
const {getAllPosts,signUp}=require('../controlers')
const router = require('express').Router();

router.get('/get-posts',getAllPosts);
router.post('/sign-up',signUp)
module.exports=router
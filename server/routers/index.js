const {getAllPosts,signUp,signIn}=require('../controlers')
const router = require('express').Router();

router.get('/get-posts',getAllPosts);
router.post('/sign-up',signUp)
router.post('/sign-in',signIn)
module.exports=router
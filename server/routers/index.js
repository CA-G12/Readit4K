const {getAllPosts,signUp,signIn,checkStar}=require('../controlers')
const router = require('express').Router();

router.get('/get-posts',getAllPosts);
router.post('/sign-up',signUp)
router.post('/sign-in',signIn)
router.post('/is-star',checkStar)
module.exports=router
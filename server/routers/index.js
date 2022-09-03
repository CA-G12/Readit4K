const {getAllPosts,signUp,signIn,checkStar
  ,addPost,deletePost,addComment,signOut,deleteComment}=require('../controlers')
const router = require('express').Router();

router.get('/get-posts',getAllPosts);
router.post('/sign-up',signUp)
router.post('/sign-in',signIn)
router.post('/is-star',checkStar)
router.post('/add-post',addPost)
router.delete('/delete-post',deletePost)
router.post('/add-comment',addComment)
router.post('/sign-out',signOut)
router.delete('/delete-comment',deleteComment)
module.exports=router
const getAllPosts=require('./getAllPosts')
const signUp=require('./sginUp')
const signIn=require('./signIn')
const checkStar=require('./checkStar')
const addPost=require('./addPost')
const deletePost=require('./deletePost')
const addComment=require('./addComment')
const signOut=require('./signOut')
const deleteComment=require('./deleteComment')
module.exports={
  getAllPosts,signUp,signIn,checkStar,
  addPost,deletePost,addComment,signOut,deleteComment
}
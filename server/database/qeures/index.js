const {getAllpostswithUseAndStars,getComments
  ,getStarsData,addPostQuery,removePost,updatePostQuery}=require('./posts')
const {userIsExist,saveNewUser}=require('./users')
const {isLike,addStar,removeStar}=require('./stars')
const {addCommentQuery,deleteCommentQuery,updatecommentQuery}=require('./comments')

module.exports={
  getAllpostswithUseAndStars,getComments,
  userIsExist,saveNewUser,getStarsData,
  isLike,addStar,removeStar,addPostQuery,removePost,
  addCommentQuery,deleteCommentQuery,updatePostQuery,updatecommentQuery
}
const {getAllpostswithUseAndStars,getComments
  ,getStarsData,addPostQuery,removePost}=require('./posts')
const {userIsExist,saveNewUser}=require('./users')
const {isLike,addStar,removeStar}=require('./stars')

module.exports={
  getAllpostswithUseAndStars,getComments,
  userIsExist,saveNewUser,getStarsData,
  isLike,addStar,removeStar,addPostQuery,removePost
}
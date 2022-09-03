const {getAllpostswithUseAndStars,getComments,getStarsData,addPostQuery}=require('./posts')
const {userIsExist,saveNewUser}=require('./users')
const {isLike,addStar,removeStar}=require('./stars')

module.exports={
  getAllpostswithUseAndStars,getComments,
  userIsExist,saveNewUser,getStarsData,
  isLike,addStar,removeStar,addPostQuery
}
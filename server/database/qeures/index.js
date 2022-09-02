const {getAllpostswithUseAndStars,getComments}=require('./posts')
const {userIsExist,saveNewUser}=require('./users')


module.exports={
  getAllpostswithUseAndStars,getComments,userIsExist,saveNewUser
}
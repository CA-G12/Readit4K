const {deleteCommentQuery}=require('../database/qeures')
const deleteComment=(req)=>{
  const { comment_id, user_id, post_user_id }=req.body
  if(req.user.id=== user_id||req.user.id===post_user_id){
    deleteCommentQuery(comment_id)
  }
}
module.exports=deleteComment
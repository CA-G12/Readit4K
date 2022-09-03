const {removePost}=require('../database/qeures')
const deletePost=(req)=>{
  const {user_id,id}=req.body
if(req.user.id===user_id){
  removePost(id)
}
}

module.exports=deletePost
const {updatePostQuery}=require('../database/qeures')

const updatePost=(req,res)=>{
  const {post_id,user_id,postUpdate}=req.body;
  if(req.user.id===user_id){
    updatePostQuery(postUpdate,post_id).then(({rows})=>res.json(rows[0]))

  }
}
module.exports=updatePost
const {addCommentQuery}=require('../database/qeures')
const addComment =(req,res)=>{
  const {user_id,post_id,comment}=req.body
  if(user_id===req.user.id){
    addCommentQuery(user_id,post_id,comment).
    then(({rows})=>res.json({...rows[0],name:req.user.name,img:req.user.img}))
  }

}
module.exports=addComment
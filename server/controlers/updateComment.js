const {updatecommentQuery}=require('../database/qeures')
const updateComment=(req,res)=>{
  const {comment_id,user_id,comment}=req.body;
  if(req.user.id===user_id){
    updatecommentQuery(comment,comment_id).then(({rows})=>res.json(rows[0]))

  }
}
module.exports=updateComment
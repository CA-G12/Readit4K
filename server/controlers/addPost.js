const {addPostQuery}=require('../database/qeures')
const addPost =(req,res)=>{
  const {user_id,post}=req.body

  if(req.user.id===user_id){
    addPostQuery(user_id,post).then(({rows})=>res.json(rows[0]))

  }

}
module.exports=addPost
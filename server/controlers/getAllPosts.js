const e = require('express')
const {getAllpostswithUseAndStars,getComments}=require('../database/qeures')
const getAllPosts=(req,res)=>{
  getAllpostswithUseAndStars().then(({rows}) => getComments()
  .then(comments=>
    rows.map(e=>e={...e,comments:comments.rows.filter(a=>a.post_id==e.id)})
  ) ).then(posts=>res.json(posts)).catch(err=>console.log(err))
}
module.exports=getAllPosts
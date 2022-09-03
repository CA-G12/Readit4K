const {getAllpostswithUseAndStars,getComments,getStarsData}=require('../database/qeures')
const getAllPosts=(req,res)=>{
  getAllpostswithUseAndStars().then(({rows}) => getComments()
  .then(comments=>
    rows.map(e=>e={...e,comments:comments.rows.filter(a=>a.post_id==e.id)})
  ) ).then(r=>getStarsData().then(({rows})=>
    r.map(e=>e={...e,
   nameStar:rows.find(a=>a.post_id===e.id)
    })
).then(data=>res.json(data))
  
  ).catch(err=>console.log(err))
}
module.exports=getAllPosts
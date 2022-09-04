const  connection=require('../config/connection');
const addCommentQuery=(user_id,post_id,comment)=>{
  const query=`insert into comments (user_id ,post_id,comment) values ($1,$2,$3) returning *;`
  return connection.query(query,[user_id,post_id,comment])
}
const deleteCommentQuery=(id)=>{
  const query=` delete from comments where id=$1;`
  return connection.query(query,[id])
}
const updatecommentQuery=(content,id)=>{
  const query=` update comments set comment =$1 where comments.id =$2 returning comments.comment;`
  return connection.query(query,[content,id])
}
module.exports={addCommentQuery,deleteCommentQuery,updatecommentQuery}
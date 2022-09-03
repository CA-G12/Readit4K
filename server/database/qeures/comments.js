const  connection=require('../config/connection');
const addCommentQuery=(user_id,post_id,comment)=>{
  const query=`insert into comments (user_id ,post_id,comment) values ($1,$2,$3) returning *;`
  return connection.query(query,[user_id,post_id,comment])
}
const deleteCommentQuery=(id)=>{
  const query=` delete from comments where id=$1;`
  return connection.query(query,[id])
}

module.exports={addCommentQuery,deleteCommentQuery}
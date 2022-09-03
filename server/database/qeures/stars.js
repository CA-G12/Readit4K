const  connection=require('../config/connection');


   const  isLike=(user_id,post_id)=>{
          const query=` select * from stars where stars.user_id=$1 and stars.post_id=$2`
          return connection.query(query,[user_id,post_id])
    }
    const addStar=(user_id,post_id)=>{
      const query=`insert into stars (user_id,post_id) values 
      ($1,$2)`
      return connection.query(query,[user_id,post_id])
    }
    const removeStar=(id)=>{
      const query=` delete from stars where id=$1;`
      return connection.query(query,[id])
}
  
    
module.exports={isLike,addStar,removeStar};
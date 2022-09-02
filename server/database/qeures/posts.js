const  connection=require('../config/connection');


   const  getAllpostswithUseAndStars=()=>{
          const query=`select * from 
          (
            select posts.* ,users.email,count(stars.*) as s 
            from posts left join users on users.id= posts.user_id 
            left join stars on stars.post_id=posts.id 
          group by posts.id,users.id
          )
           as p  order by p.s DESC;`
          return connection.query(query)
    }
   const  getComments=()=>{
      this.query=`select comments.*,users.id,users.email from comments left join users on comments.user_id =users.id;`
      return connection.query(this.query)
}
    
module.exports={getAllpostswithUseAndStars,getComments};
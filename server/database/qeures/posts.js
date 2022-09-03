const  connection=require('../config/connection');


   const  getAllpostswithUseAndStars=()=>{
          const query=`select * from 
          (
            select posts.* ,users.name,users.img as imgUser,count(stars.*) as s 
            from posts left join users on users.id= posts.user_id 
            left join stars on stars.post_id=posts.id 
          group by posts.id,users.id
          )
           as p  order by p.s DESC;`
          return connection.query(query)
    }
    const getStarsData=()=>{
      const query=`select stars.post_id ,
      json_agg(json_build_object('user_id',users.id,'username',users.name,'img',users.img)) 
      from stars join users on users.id=stars.user_id group by stars.post_id;`
      return connection.query(query)
    }
   const  getComments=()=>{
      const query=`select comments.*,users.id,users.email,users.name,users.img from comments left join users on comments.user_id =users.id;`
      return connection.query(query)}
    
module.exports={getAllpostswithUseAndStars,getComments,getStarsData};


// `
// select 
//     posts.id,
//    posts.post,
//    users.id as user_id,
//    users.img,
//    users.name,
//    json_agg(comments .*) as comments,
//    json_agg(stars.*) as datastar,
//    (select count(*)from stars where stars.post_id = posts.id ) as stars
// from posts left join
// stars on posts.id =stars.post_id
    
//          left join comments
//                    on posts.id = comments.post_id
//          left join users
//                    on users.id = posts.user_id

// group by posts.id, users.id;
// `

// `
// select posts.post,v.b from posts left join ( select posts.id,  json_agg(stars.*) as b from posts left join stars on posts.id=stars.post_id group by posts.id) as v on v.id=posts.id;

// `
// SELECT 
//   stars.post_id, 
//   ,json_agg(json_build_object('col1', users.id, 'col2', users.name) AS item
// FROM stars
// JOIN b ON stars.user_id = users.id
// GROUP BY stars.id,;
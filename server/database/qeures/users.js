const  connection=require('../config/connection');


   const  userIsExist=(email)=>{
          const query=` select * from users where email =$1`
          return connection.query(query,[email])
    }
    const saveNewUser=(name,email,password,img)=>{
      const query=`insert into users (name,email,password,img) values 
      ($1,$2,$3,$4) returning name,id,img `
      return connection.query(query,[name,email,password,img])
    }
  
    
module.exports={userIsExist,saveNewUser};
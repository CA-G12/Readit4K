const {userIsExist}=require('../database/qeures')
const bcrypt = require("bcryptjs");
const {jwt}=require('../mw')
const signIn=(req,res)=>{
 const  {email,password}=req.body;
 userIsExist(email).then(({rows})=>{
  if (rows.length===0) {
    res.json({msg:"email is not exist"})
  }else{

    bcrypt.compare(password,rows[0].password).then(result=>{
      if(result){
        userIsExist(email)
        .then(({rows})=>jwt({id:rows[0].id,name:rows[0].name,img:rows[0].img},res))
      }else{

res.json({msg:"password is false"})
      }
    }).catch(err=>res.send(err))
  }
 })

 
}

module.exports=signIn
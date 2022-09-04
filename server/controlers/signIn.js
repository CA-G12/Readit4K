const {userIsExist}=require('../database/qeures')
const bcrypt = require("bcryptjs");
const {jwtFun}=require('../mw')
const {signInSchema}=require('../validate/vaildate')
const signIn=(req,res)=>{
 const  {email,password}=req.body;

const {error}=signInSchema.validate(req.body)

if(!error){
  userIsExist(email).then(({rows})=>{
    if (rows.length===0) {
      res.json({msg:"email is not exist"})
    }else{
  
      bcrypt.compare(password,rows[0].password).then(result=>{
        if(result){
          userIsExist(email)
          .then(({rows})=>jwtFun.jwtFun({id:rows[0].id,name:rows[0].name,img:rows[0].img},res))
        }else{
  
  res.json({msg:"password is false"})
        }
      }).catch(err=>res.send(err))
    }
   })
}else {
  res.json({ msg: error.details[0].message, state: 'fail' });
  
}


 
}

module.exports=signIn
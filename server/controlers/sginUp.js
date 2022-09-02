const {userIsExist,saveNewUser}=require('../database/qeures')
const {jwtFun}=require('../mw')
const bcrypt = require("bcryptjs");

const signUp=(req,res)=>{
 const  {name,img,email,password}=req.body
 console.log(req.body);
  userIsExist(email).then(({rows})=>{if(rows[0]){
    res.json({msg:"email is exist"})
  }else{
    bcrypt.hash(password,12).then(hashPassword=>
      saveNewUser(name,email,hashPassword,img).
    then(({rows})=>{

      jwtFun.jwtFun(rows[0],res)}).catch(err=>res.send(err))
    
    )
  }

}
  
  
  )
}

module.exports=signUp
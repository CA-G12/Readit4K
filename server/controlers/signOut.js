
const signOut=(req,res)=>{
// console.log(req.body);
res.clearCookie('token')
res.json({})
}

module.exports=signOut
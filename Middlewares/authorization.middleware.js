const jwt=require("jsonwebtoken")

const authorization=(req,res,next)=>{

const token=req.headers.token

if(token){

    jwt.verify(token,"secret",(err,decoded)=>{
        if(err){
            res.send("please login again!")
        }else{
           
            req.body.userID=decoded.userID
            next()
        }
    })


}else{
    res.send("please login again!")
}



}

module.exports={authorization}
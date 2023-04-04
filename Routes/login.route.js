const express=require("express")
const login=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { UserModel } = require("../Models/user.model")

login.post("/",async(req,res)=>{

    const {email,password}=req.body


try {
    const user=await UserModel.find({email})
    if(user.length){
        
    bcrypt.compare(password,user[0].password,(err,result)=>{

        if(result){
         
            jwt.sign({userID:user[0]._id},"secret",(err,token)=>{

                if(err){
                    res.send("something went wrong!")
                }else{
                    res.send({token})
                }
            })

        }else{
            res.send("Entered wrong password")
        }


    })

    }else{
        res.send("Email is not registered!")
    }
    
} catch (error) {
    res.send(error)
}



})





module.exports={login}
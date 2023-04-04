const express=require("express")
const { UserModel } = require("../Models/user.model")
const { profileModel } = require("../Models/profile.model")
const getProfile=express.Router()


getProfile.get("/",async(req,res)=>{
   const userID=req.body.userID

    try {
        const profile=await profileModel.find({userID})
        console.log(profile)
        res.send(profile)
    } catch (error) {
        console.log(error)
        res.send(error)
    }


})





module.exports={getProfile}
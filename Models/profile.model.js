const mongoose=require("mongoose")

const profile=new mongoose.Schema({
    userID:{ type: String, required: true },
    timeStamp:{type:String, required: true },
    name:{type:String, required: true },
    email:{type:String, required: true } 
})

const profileModel=mongoose.model("profile",profile)

module.exports={profileModel}
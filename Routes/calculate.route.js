const express=require("express")
const calculate=express.Router()

calculate.post("/",(req,res)=>{
    
    let {p,i,n}=req.body
   i=i/100
if(!(p&&i&&n)){
res.send("please provide all data")
}
const tmv=      Math.floor(p * ( ( ((1+i)**n)-1)/i))
const tia=  Math.floor(     p*n     )
const tig= Math.floor(tmv-tia)

res.send({tmv,tia,tig})
})






module.exports={calculate}
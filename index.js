const express=require("express")
const { connection } = require("./Configs/db")
const { register } = require("./Routes/register.route")
const { login } = require("./Routes/login.route")
const { getProfile } = require("./Routes/getProfile.route")
const { calculate } = require("./Routes/calculate.route")
const {authorization}=require("./Middlewares/authorization.middleware")
require("dotenv").config()
const app=express()

app.use(express.json())




app.use("/register",register)
app.use("/login",login)
app.use(authorization)
app.use("/getProfile",getProfile)
app.use("/calculate",calculate)


app.get("/",(req,res)=>{
    console.log("Starts")
    res.send("welcome")
})

// conneting to mongo //

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("server is running")
    } catch (error) {
        console.log(error)
    }
})




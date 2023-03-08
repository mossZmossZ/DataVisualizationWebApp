const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const mongooose = require("mongoose")

require("dotenv").config()

const app = express()

//middle ware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.get("*",(req,res)=>{
    res.json({
        data:"Hello Server"
    })
})

const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server with port ${port}`))
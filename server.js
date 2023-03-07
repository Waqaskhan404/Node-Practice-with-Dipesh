const express=require("express");
const dotenv=require("dotenv").config();

const app=express()


const port=process.env.PORT || 5000

app.get("/",function(req,res){
    res.status(200).json({message:"Hey This is Home Route"})
})

app.listen(port,function(req,res){
    console.log(`Server is Running Port  ${port}`)
})
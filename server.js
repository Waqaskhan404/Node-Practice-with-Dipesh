const express=require("express");
const dotenv=require("dotenv").config();

const app=express()


const port=process.env.PORT || 5000


// Middleware
app.use("/api/contacts",require("./routes/contactRoutes"))

app.listen(port,function(req,res){
    console.log(`Server is Running Port  ${port}`)
})
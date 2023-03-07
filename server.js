const express=require("express");
const dotenv=require("dotenv").config();

const app=express()


const port=process.env.PORT || 5000


// Middleware For body 
// This the the middleware for accepting the body values
app.use(express.json())

// Middleware For routes and this is the Common Route "/api/contacts"
app.use("/api/contacts",require("./routes/contactRoutes"))

app.listen(port,function(req,res){
    console.log(`Server is Running Port  ${port}`)
})
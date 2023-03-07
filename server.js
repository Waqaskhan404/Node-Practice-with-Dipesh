const express=require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv=require("dotenv").config();


connectDb();
const app=express()


const port=process.env.PORT || 5000


// Middleware For body 
// This the the middleware for accepting the body values
app.use(express.json())

// Middleware For routes and this is the Common Route "/api/contacts"
app.use("/api/contacts",require("./routes/contactRoutes"))



// Middleware For routes and this is the Common Route "/api/users"
app.use("/api/users",require("./routes/usersRoutes"))


// Export the Error Middleware
app.use(errorHandler)

app.listen(port,function(req,res){
    console.log(`Server is Running Port  ${port}`)
})
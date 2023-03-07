const mongoose=require("mongoose")


// Here is create schema
const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true , "Please add your name"]
    },
    email:{
        type:String,
        required:[true , "Please add your email"]
    },
    phone:{
        type:String,
        required:[true , "Please add your phone no"]
    }
},
{
    timestamps:true
}

);


//it takes two argument one is model name another is schema
module.exports=mongoose.model("Contact",contactSchema)
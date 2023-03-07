const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Please Enter UserName"],
    },
    email:{
        type:String,
        required:[true,"Please Enter Email"],
        unique:[true,"This Email is already registered"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Password"],
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema);
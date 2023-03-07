const express=require("express")

const router=express.Router();


router.post("/register",(req,res)=>{
    res.json({message:"Register user"})

});

router.post("/login",(req,res)=>{
    res.json({message:"Login user"})

});

router.get("/current",(req,res)=>{
    res.json({message:"current user  info"})

});

module.exports=router;
const {constrants}=require("../constrants")
const errorHandler=(err,req,res,next)=>{

    const statusCode=res.statusCode ? res.statusCode : 500
    // res.json({message:"Not Found" , message:err.message,stackTrace:err.stack})
    switch (statusCode) {
        case constrants.VALIDATION_ERROR:
            res.json({
            title:"Validation Faild",
            message:err.message,
            stackTrace:err.stack
            })
            break;
            case constrants.UNAUTHORIZED:
            res.json({
            title:"unAuthorized",
            message:err.message,
            stackTrace:err.stack
            })
            break;
            case constrants.FORBIDDEN:
            res.json({
            title:"Forbidden",
            message:err.message,
            stackTrace:err.stack
            })
            break;
            case constrants.SERVER_ERROR:
            res.json({
            title:"Server Error",
            message:err.message,
            stackTrace:err.stack
            })
            break;
            case constrants.NOT_FOUND:
            res.json({
            title:"Not Found Error",
            message:err.message,
            stackTrace:err.stack
            })
            break;
    
        default:
            console.log("No Error  All are Good")
            break;
    }


}

module.exports=errorHandler
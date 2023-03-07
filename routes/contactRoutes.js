const express=require("express");
const router=express.Router();
const {getContacts,createContact,getContact,updateContact,deleteContact}=require("../controllers/contactControllers")


// router.route("/").get((req,res)=>{
//     res.status(200).json({message:"Get All Contacts"})
// })
router.route("/").get(getContacts).post(createContact)



// router.route("/").post(createContact)


router.route("/:id").put(updateContact).delete(deleteContact).get(getContact)
// router.route("/:id").delete(deleteContact)
// router.route("/:id").get(getContact)

module.exports=router
const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")

//  @ desc Get All Contacts
//  @route GET /api/contacts
//  @access Public

const getContacts=asyncHandler( async (req,res)=>{
    //here is the model with await it get all the contact with find() function
    const contact=await Contact.find();
    res.status(200).json(contact)
})

//  @ desc POST  Contact
//  @route POST /api/contacts
//  @access Public
const createContact=asyncHandler( async (req,res)=>{
    console.log(req.body)
    // Destructure the Req body
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are modulatory")
    }
    //now Create a realtime Contact which have a body 
    const contact=await Contact.create({
        name,
        email,
        phone
    })
        res.status(201).json({message:"Create Contacts"})
    })

    //  @ desc GET  Contact
//  @route GET /api/contacts/:id
//  @access Public
const getContact=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`})

})


//  @ desc Update  Contact
//  @route PUT /api/contacts
//  @access Public
const updateContact=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`})

})


//  @ desc DELETE  Contact
//  @route DELETE /api/contacts
//  @access Public
const deleteContact=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`})
})


module.exports={getContacts,createContact,getContact,updateContact,deleteContact}
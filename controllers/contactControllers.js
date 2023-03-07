//  @ desc Get All Contacts
//  @route GET /api/contacts
//  @access Public

const getContacts=(req,res)=>{
    res.status(200).json({message:"Get All Contacts"})
}

//  @ desc POST  Contact
//  @route POST /api/contacts
//  @access Public
const createContact=(req,res)=>{
    console.log(req.body)
    // Destructure the Req body
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are modulatory")
    }
        res.status(201).json({message:"Create Contacts"})
    }

    //  @ desc GET  Contact
//  @route GET /api/contacts/:id
//  @access Public
const getContact=(req,res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`})

}
//  @ desc Update  Contact
//  @route PUT /api/contacts
//  @access Public
const updateContact=(req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`})

}
//  @ desc DELETE  Contact
//  @route DELETE /api/contacts
//  @access Public
const deleteContact=(req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`})
}


module.exports={getContacts,createContact,getContact,updateContact,deleteContact}
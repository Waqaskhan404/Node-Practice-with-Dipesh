const asyncHandler = require("express-async-handler");
const { deleteOne } = require("../models/contactModel");
const Contact = require("../models/contactModel");

//  @ desc Get All Contacts
//  @route GET /api/contacts
//  @access private

const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({user_id:req.user.id});
  res.status(200).json(contact);
});

//  @ desc POST  Contact
//  @route POST /api/contacts
//  @access private
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  // Destructure the Req body
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are modulatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id:req.user.id
  });
  res.status(201).json(contact);
});

//  @ desc GET  Contact
//  @route GET /api/contacts/:id
//  @access private
const getContact = asyncHandler(async (req, res) => {
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
  res.status(200).json(contact);
});

//  @ desc Update  Contact
//  @route PUT /api/contacts
//  @access private
const updateContact = asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
    if(contact.user_id.toString() !== req.user.id){
      res.status(403);
        throw new Error("User Don't have permission other Update other Contact")
    }
    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    )
  res.status(200).json(updateContact);
});

//  @ desc DELETE  Contact
//  @route DELETE /api/contacts
//  @access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
      res.status(403);
        throw new Error("User Don't have permission other Update other Contact")
    } 
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
  });

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};

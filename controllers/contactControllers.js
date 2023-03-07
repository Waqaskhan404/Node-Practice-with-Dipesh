const asyncHandler = require("express-async-handler");
const { deleteOne } = require("../models/contactModel");
const Contact = require("../models/contactModel");

//  @ desc Get All Contacts
//  @route GET /api/contacts
//  @access Public

const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

//  @ desc POST  Contact
//  @route POST /api/contacts
//  @access Public
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
  });
  res.status(201).json(contact);
});

//  @ desc GET  Contact
//  @route GET /api/contacts/:id
//  @access Public
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
//  @access Public
const updateContact = asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
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
//  @access Public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
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

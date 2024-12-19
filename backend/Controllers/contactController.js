const Contact = require("../model/contact");

const getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    res.status(200).json({ contacts });
  } catch (e) {
    res.status(500).json({ error: "Error in getting contacts" });
  }
};

const getSelectedContact = async (req, res) => {
  try {
    const { id: contactId } = req.params;
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (e) {
    res.status(500).json({ error: "Error in getting that one contact" });
  }
};

const createContact = async (req, res) => {
  // console.log(req.body);
  try {
    // console.log("Request body:", req.body);
    const { name, phone, email } = req.body;
    const photoUrl = "https://avatar.iran.liara.run/public";
    const newContact = await Contact.create({ name, phone, email, photoUrl });
    // console.log("Created contact:");
    // console.log("Created contact:", newContact);
    res.status(201).json({ newContact });
  } catch (e) {
    res.status(500).json({ error: "Contact Validation Faild Please provide" });
  }
};

const updateContact = async (req, res) => {
  try {
    const { id: contactId } = req.params;
    console.log(contactId);
    const { name, phone, email } = req.body;
    const photoUrl = "https://avatar.iran.liara.run/public";
    const result = await Contact.updateOne(
      { _id: contactId },
      { $set: { name, phone, email, photoUrl } }
    );
    if (result.nModified === 0) {
      return res
        .status(404)
        .json({ error: "Contact not found or no changes made" });
    }
    res.status(200).json({ message: "Contact updated successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ error: "Something went wrong while updating contact" });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id: contactId } = req.params;
    const result = await Contact.deleteOne({ _id: contactId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ error: "Something went wrong while deleting contact" });
  }
};

module.exports = {
  getAllContact,
  getSelectedContact,
  createContact,
  updateContact,
  deleteContact,
};

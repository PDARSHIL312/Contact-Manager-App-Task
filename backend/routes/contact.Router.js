const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

// Get all contacts
router.get("/", contactController.getAllContact);

// Get a single contact by ID
router.get("/:id", contactController.getSelectedContact);

// Create a new contact
router.post("/", contactController.createContact);

// Update a contact by ID
router.put("/:id", contactController.updateContact);

// Delete a contact by ID
router.delete("/:id", contactController.deleteContact);

// router.get("/search", contactController.searchContacts);


module.exports = router;

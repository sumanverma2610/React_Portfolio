import prisma from "../../prisma/prisma.js";

// Create Contact (Public API)
const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending message" });
  }
};

// Admin: Get All Contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { id: "desc" },
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching contacts" });
  }
};

export { createContact, getAllContacts };
import { Router } from "express";
import { createContact, getAllContacts } from "../../controller/contact/contact.controller.js";
import { authenticate, authorizeAdmin } from "../../middleware/auth.midleware.js";

const router = Router();

router.post("/addContact", createContact);

router.get("/getContact", authenticate, authorizeAdmin, getAllContacts);
//router.get("/getContact", getAllContacts);
export default router;
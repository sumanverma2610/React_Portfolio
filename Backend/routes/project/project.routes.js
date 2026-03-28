import { Router } from "express";
import { addProject,getAllProjects } from "../../controller/project/project.controller.js";
import { authenticate, authorizeAdmin } from "../../middleware/auth.midleware.js";

const router = Router();

router.post("/add", authenticate, authorizeAdmin, addProject);

router.get("/get", getAllProjects);

export default router;
import { Router } from "express";
import authRoutes from "./auth/auth.routes.js";
import projectRoutes from "./project/project.routes.js";
import ContactRoutes from "./contact/contact.routes.js";

const rootRouter = Router();

rootRouter.use("/auth", authRoutes);
rootRouter.use("/project", projectRoutes);
rootRouter.use("/contact", ContactRoutes);

export default rootRouter;
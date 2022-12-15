import { Router } from "express";
import { consentRoutes } from "./consentRoutes";

const routes = Router();

routes.use("/consent", consentRoutes);

export { routes };

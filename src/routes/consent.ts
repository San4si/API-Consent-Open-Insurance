import { Router } from "express";

import * as consentController from "../controllers/consentController";

const routes = Router();

routes.get("/consent", consentController.all);
routes.post("/consent", consentController.create);
routes.put("/consent/:id", consentController.update);
routes.delete("/consent/:id", consentController.remove);

export { routes };

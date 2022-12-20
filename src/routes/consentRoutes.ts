import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticator";

import { CreateConsentController } from "../modules/consents/consentCases/createConsent/createConsentController";
import { DeleteConsentByController } from "../modules/consents/consentCases/deleteConsent/DeleteConsentByController";
import { GetByConsentController } from "../modules/consents/consentCases/getByConsent/GetByConsentController";
import { GetConsentByController } from "../modules/consents/consentCases/getConsent/GetConsentByController";
import { UpdateConsentByController } from "../modules/consents/consentCases/updateConsent/UpdateConsentByController";

const createConsentController = new CreateConsentController();
const getConsentByController = new GetConsentByController();
const getByConsentController = new GetByConsentController();
const updateConsentByController = new UpdateConsentByController();
const deleteConsentByController = new DeleteConsentByController();

const consentRoutes = Router();

consentRoutes.get("/", getConsentByController.handle);
consentRoutes.get("/:consentId", getByConsentController.handle);
consentRoutes.post("/", ensureAuthenticated, createConsentController.handle);
consentRoutes.put(
  "/:consentId",
  ensureAuthenticated,
  updateConsentByController.handle
);
consentRoutes.delete("/:consentId", deleteConsentByController.handle);

export { consentRoutes };

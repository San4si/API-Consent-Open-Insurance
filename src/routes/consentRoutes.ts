import { Router } from "express";
import { CreateConsentController } from "../modules/consents/consentCases/createConsent/createConsentController";

const createConsentController = new CreateConsentController();

const consentRoutes = Router();

consentRoutes.post("/", createConsentController.handle);

export { consentRoutes };

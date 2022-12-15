import { Decimal } from "@prisma/client/runtime";
import { Router } from "express";
import { CreateConsentController } from "../modules/consents/consentCases/createConsent/createConsentController";
import { DeleteConsentByController } from "../modules/consents/consentCases/deleteConsent/deleteConsentByController";
import { GetConsentByController } from "../modules/consents/consentCases/getConsent/getConsentByController";
import { UpdateConsentByController } from "../modules/consents/consentCases/updateConsent/UpdateConsentByController";

const createConsentController = new CreateConsentController();
const getConsentByController = new GetConsentByController();
const updateConsentByController = new UpdateConsentByController();
const deleteConsentByController = new DeleteConsentByController();

const consentRoutes = Router();

consentRoutes.post("/", createConsentController.handle);
consentRoutes.get("/", getConsentByController.handle);
consentRoutes.put("/:consentId", updateConsentByController.handle);
consentRoutes.delete("/:consentId", deleteConsentByController.handle);

export { consentRoutes };

import { Request, Response } from "express";
import { DeleteConsentByCase } from "./DeleteConsentByCase";

export class DeleteConsentByController {
  async handle(req: Request, res: Response) {
    try {
      await DeleteConsentByCase(String(req.params.consentId));
      res.status(204).send();
    } catch (e) {
      res.status(400).send(e);
    }
  }
}

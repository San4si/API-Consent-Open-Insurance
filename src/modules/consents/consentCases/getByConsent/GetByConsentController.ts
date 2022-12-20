import { Request, Response } from "express";
import { GetByConsentCase } from "./GetByConsentCase";

export class GetByConsentController {
  async handle(req: Request, res: Response) {
    try {
      const consentid = await GetByConsentCase(String(req.params.consentId));
      res.status(200).json(consentid);
    } catch (e) {
      res.status(400).send(e);
    }
  }
}

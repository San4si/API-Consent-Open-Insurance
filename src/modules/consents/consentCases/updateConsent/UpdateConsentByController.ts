import { Request, Response } from "express";
import { UpdateConsentByCase } from "./updateConsentByCase";

export class UpdateConsentByController {
  async handle(req: Request, res: Response) {
    // const { consentId } = req.params;
    // const { status } = req.body;
    try {
      const consent = await UpdateConsentByCase(
        String(req.params.consentId),
        req.body
      );
      res.status(200).send(consent);
    } catch (e) {
      res.status(400).send(e);
    }
  }
}

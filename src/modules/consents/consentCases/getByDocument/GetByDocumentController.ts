import { Request, Response } from "express";
import { GetByDocumentCase } from "./GetByDocumentCase";

export class GetByDocumentController {
  async handle(req: Request, res: Response) {
    try {
      const consents = await GetByDocumentCase(String(req.params.document));
      res.status(200).json(consents);
    } catch (e) {
      res.status(400).send(e);
    }
  }
}

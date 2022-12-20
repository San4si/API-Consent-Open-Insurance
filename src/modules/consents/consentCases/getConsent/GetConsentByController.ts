import { Request, Response } from "express";
import { GetConsentByCase } from "./GetConsentByCase";

export class GetConsentByController {
  async handle(req: Request, res: Response) {
    const getConsentByCase = new GetConsentByCase();

    const result = await getConsentByCase.execute();

    return res.status(200).json(result);
  }
}

import { Request, Response } from "express";
import { GetConsentByCase } from "./getConsentByCase";

export class GetConsentByController {
  async handle(req: Request, res: Response) {
    const getConsentByCase = new GetConsentByCase();

    const result = await getConsentByCase.execute();

    return res.status(201).json(result);
  }
}

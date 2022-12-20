import { Request, Response } from "express";
import { CreateConsentConsentCase } from "./createConsentConsentCase";

export class CreateConsentController {
  async handle(req: Request, res: Response) {
    const { data } = req.body;
    //console.log(req.body);
    const createConsentConsentCase = new CreateConsentConsentCase();

    const result = await createConsentConsentCase.execute(data);

    return res.status(201).json(result);
  }
}

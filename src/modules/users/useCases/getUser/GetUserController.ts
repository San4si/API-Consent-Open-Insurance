import { Request, Response } from "express";
import { GetUserCase } from "./GetUserCase";

export class GetUserController {
  async handle(req: Request, res: Response) {
    const getuserCase = new GetUserCase();

    const result = await getuserCase.execute();

    return res.status(200).json(result);
  }
}

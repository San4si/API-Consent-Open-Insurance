import { Request, Response } from "express";
import { GetByUserCase } from "./getByUserCase";

export class GetByUserController {
  async handle(req: Request, res: Response) {
    // console.log(req.body);
    try {
      const userid = await GetByUserCase(String(req.params.UserId));
      res.status(200).json(userid);
    } catch (e) {
      res.status(400).send(e);
    }
  }
}

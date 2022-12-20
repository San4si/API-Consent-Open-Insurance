import { Request, Response } from "express";
import { CreateUserCase } from "./createUserCase";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserCase = new CreateUserCase();

    const user = await createUserCase.execute({
      name,
      email,
      password,
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };

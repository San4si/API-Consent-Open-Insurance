import { Request, response, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const authenticateUserUseCase = new AuthenticateUserUseCase();

    try {
      const token = await authenticateUserUseCase.execute({
        email,
        password,
      });
      return res.json(token);
    } catch ({ message }) {
      res.status(400).json({ message });
    }
  }
}

export { AuthenticateUserController };

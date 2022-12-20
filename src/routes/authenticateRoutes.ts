import { Router } from "express";
import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController();

const userAuthenticate = Router();

userAuthenticate.post("/", authenticateUserController.handle);

export { userAuthenticate };

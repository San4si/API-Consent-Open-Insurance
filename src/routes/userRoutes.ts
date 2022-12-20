import { Router } from "express";
import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";
import { GetByUserController } from "../modules/users/useCases/getByUser/getByUserController";
import { GetUserController } from "../modules/users/useCases/getUser/GetUserController";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getByUserController = new GetByUserController();
const getUserController = new GetUserController();

const userRoutes = Router();

userRoutes.get("/", getUserController.handle);
userRoutes.get("/:id", getByUserController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.post("/", authenticateUserController.handle);

export { userRoutes };

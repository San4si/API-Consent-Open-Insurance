import { Router } from "express";

import { RefreshTokenUserController } from "../modules/users/useCases/refreshTokenUser/RefreshTokenUserController";

const refreshTokenUserController = new RefreshTokenUserController();

const refreshToken = Router();

refreshToken.post("/", refreshTokenUserController.handle);

export { refreshToken };

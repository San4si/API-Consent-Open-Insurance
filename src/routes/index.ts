import { Router } from "express";
import { userAuthenticate } from "./authenticateRoutes";
import { consentRoutes } from "./consentRoutes";
import { refreshToken } from "./refreshTokenUser";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use("/consent", consentRoutes);
routes.use("/user", userRoutes);
routes.use("/login", userAuthenticate);
routes.use("/refresh-token", refreshToken);

export { routes };

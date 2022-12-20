import { NextFunction, Request, response, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token in missing",
    });
  }
  //Bearer clbsu6ti9000008l02v0y3tzz

  const [, token] = authToken.split(" ");

  try {
    verify(token, "clbsu6ti9000008l02v0y3tzz");

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Token invalid",
    });
  }
}

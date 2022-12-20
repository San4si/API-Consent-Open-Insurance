import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
import swaggerUi from "swagger-ui-express";
import { routes } from "./routes";
import swaggerFile from "../src/swagger.json";
import passport from "passport";
import cors from "cors";
import "express-async-errors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(passport.initialize());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/v1", routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(400);
    return response.json({
      status: "Error",
      message: error.message,
    });
  }
);

app.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado" });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status);
  } else {
    res.status(400); // Bad Request
  }
  if (err.message) {
    res.json({ error: err.message });
  } else {
    res.json({ error: "Ocorreu algum erro." });
  }
  //console.log(err);
};

app.use(errorHandler);

app.listen(3333, () => console.log("Server is running in port 3333"));

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
import { connect } from "./modules/mongo-db/connection";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser());
app.use(cors());

app.use("/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  connect();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

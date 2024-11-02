import "express-async-errors"
import express, { json } from "express";
import helmet from "helmet";
import cors from "cors"
import { candidateRouter } from "./routes/candidate.routes";
import { errorHandler } from "./middleware/handle-errors.middleware";
import { managerRouter } from "./routes/manager.route";

const app = express()

app.use(json())
app.use(helmet())
app.use(cors({
   allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
   origin: "http://localhost:3000",
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

app.use(candidateRouter, managerRouter)

app.use(errorHandler.execute);

export { app }
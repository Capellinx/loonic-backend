import express, { json } from "express";
import helmet from "helmet";
import cors from "cors"

const app = express()

app.use(json())
app.use(helmet())
app.use(cors({
   allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
   origin: "http://localhost:3000",
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

export { app }
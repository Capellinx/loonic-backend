import { NextFunction, Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";
import { ApplicationError } from "../config/errors/application-errors";

export class errorHandler {
   constructor() { }

   static execute(
      err: ApplicationError | Error,
      request: Request,
      response: Response,
      next: NextFunction
   ) {
      if (err instanceof ApplicationError) {
         console.log(err);
         return response.status(err.statusCode).json({
            error: err.message,
         });
      }

      if (err instanceof PrismaClientKnownRequestError) {
         console.log(err);
         return response.status(500).json({ error: "Database error" });
      }

      if (err instanceof ZodError) {
         console.log(err);
         return response.status(400).json({ error: err.issues });
      }

      return response.status(500).json({ error: err.message });
   }
}

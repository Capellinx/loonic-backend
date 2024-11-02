import { Router } from "express";
import { craeteCandidateController } from "../use-cases/candidate";


export const candidateRouter = Router()

candidateRouter.post(
   "/candidate",
   async (request, response) => {
      await craeteCandidateController.handle(request, response)
   }
)
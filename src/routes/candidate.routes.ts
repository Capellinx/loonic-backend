import { Router } from "express";
import { craeteCandidateController } from "../use-cases/candidate";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCandidateSchema } from "../use-cases/candidate/create-candidate-dto";


export const candidateRouter = Router()

candidateRouter.post(
   "/candidate",
   ZodRequestValidate.execute({body: createCandidateSchema}),
   async (request, response) => {
      await craeteCandidateController.handle(request, response)
   }
)
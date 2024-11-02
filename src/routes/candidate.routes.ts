import { Router } from "express";
import { craeteCandidateController } from "../use-cases/candidate/create-candidate";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCandidateSchema } from "../use-cases/candidate/create-candidate/create-candidate-dto";
import { getAllCandidatesSchema } from '../use-cases/candidate/get-all-candidates/get-all-candidates-dto';
import { getAllCandidatesController } from "../use-cases/candidate/get-all-candidates";


export const candidateRouter = Router()

candidateRouter.post(
   "/candidate",
   ZodRequestValidate.execute({body: createCandidateSchema}),
   async (request, response) => {
      await craeteCandidateController.handle(request, response)
   }
)

candidateRouter.get(
   "/candidate",
   ZodRequestValidate.execute({params: getAllCandidatesSchema}),
   async (request, response) => {
      await getAllCandidatesController.handle(request, response)
   }
)
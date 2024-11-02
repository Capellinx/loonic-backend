import { Router } from "express";
import { craeteCandidateController } from "../use-cases/candidate/create-candidate";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCandidateSchema } from "../use-cases/candidate/create-candidate/create-candidate-dto";
import { getAllCandidatesSchema } from '../use-cases/candidate/get-all-candidates/get-all-candidates-dto';
import { getAllCandidatesController } from "../use-cases/candidate/get-all-candidates";
import { deleteCandidateController } from "../use-cases/candidate/delete-candidate";
import { deleteCandidateSchema } from "../use-cases/candidate/delete-candidate/delete-candidate-dto";
import { getOneCandidateController } from "../use-cases/candidate/get-one-candidate";
import { getOneCandidateSchema } from "../use-cases/candidate/get-one-candidate/get-one-candidate-dto";
import { updateCandidateSchema } from "../use-cases/candidate/update-candidate/update-candidate-dto";
import { updatteCandidateController } from "../use-cases/candidate/update-candidate";
import { VerifyToken } from "../middleware/verify-token.middleware";


export const candidateRouter = Router()

candidateRouter.post(
   "/candidate",
   VerifyToken.execute,
   ZodRequestValidate.execute({ body: createCandidateSchema }),
   async (request, response) => {
      await craeteCandidateController.handle(request, response)
   }
)

candidateRouter.get(
   "/candidate",
   ZodRequestValidate.execute({ params: getAllCandidatesSchema }),
   async (request, response) => {
      await getAllCandidatesController.handle(request, response)
   }
)

candidateRouter.delete(
   "/candidate/:id",
   VerifyToken.execute,
   ZodRequestValidate.execute({ params: deleteCandidateSchema }),
   async (request, response) => {
      await deleteCandidateController.handle(request, response)
   }
)

candidateRouter.get(
   "/candidate/:id",
   ZodRequestValidate.execute({ params: getOneCandidateSchema }),
   async (request, response) => {
      await getOneCandidateController.handle(request, response)
   }
)

candidateRouter.patch(
   "/candidate/:id",
   VerifyToken.execute,
   ZodRequestValidate.execute({ body: updateCandidateSchema }),
   async (request, response) => {
      await updatteCandidateController.handle(request, response)
   }
)
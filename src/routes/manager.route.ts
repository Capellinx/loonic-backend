import { Router } from "express";
import { registerManagerSchema } from "../use-cases/manager/register-manager/register-manager-dto";
import { registerManagerController } from "../use-cases/manager/register-manager";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";

export const managerRouter = Router()

managerRouter.post(
   "/manager",
   ZodRequestValidate.execute({ body: registerManagerSchema }),
   async (request, response) => {
      await registerManagerController.handle(request, response)
   }
)

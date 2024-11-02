import { Router } from "express";
import { registerManagerSchema } from "../use-cases/manager/register-manager/register-manager-dto";
import { registerManagerController } from "../use-cases/manager/register-manager";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { loginManagerSchema } from "../use-cases/manager/login-manager/login-manager-dto";
import { loginManagerController } from "../use-cases/manager/login-manager";

export const managerRouter = Router()

managerRouter.post(
   "/manager",
   ZodRequestValidate.execute({ body: registerManagerSchema }),
   async (request, response) => {
      await registerManagerController.handle(request, response)
   }
)

managerRouter.post(
   "/manager/login",
   ZodRequestValidate.execute({ body: loginManagerSchema }),
   async (request, response) => {
      await loginManagerController.handle(request, response)
   }
)
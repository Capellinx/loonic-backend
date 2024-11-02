import { Request, Response } from "express";
import { LoginManagerUseCase } from "./login-manager";

export class LoginManagerController {
   constructor(
      private loginManagerUseCase: LoginManagerUseCase
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { email, password } = request.body

      const output = await this.loginManagerUseCase.execute({ email, password })

      return response.status(200).json(output)
   }
}

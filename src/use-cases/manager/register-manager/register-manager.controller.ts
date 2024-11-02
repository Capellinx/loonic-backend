import { Request, Response } from "express";
import { RegisterManagerUseCase } from "./register-manager";
import { RegisterManagerDTO } from "./register-manager-dto";


export class RegisterManagerController {
   constructor(
      private registerManagerUseCase: RegisterManagerUseCase
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { email, password } = request.body  

      await this.registerManagerUseCase.execute({ email, password })

      return response.status(201).send()
   }
}

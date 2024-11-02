import { Request, Response } from "express";
import { CreateCandidateUseCase } from "./create-candidate";


export class CraeteCandidateController {
   constructor(
      private createCandidateUseCase: CreateCandidateUseCase
   ){}

   async handle(request: Request, response: Response): Promise<Response> {
      const { name, email, phone, education, experience, status } = request.body

      await this.createCandidateUseCase.execute({
         name,
         email,
         phone,
         education,
         experience,
         status
      })

      return response.status(201).send()
   }
}
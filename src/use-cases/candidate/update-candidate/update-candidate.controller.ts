import { Request, Response } from "express";
import { UpdateCandidateUseCase } from "./update-candidate";


export class UpdateCandidateController {
   constructor(
      private updateCandidateUseCase: UpdateCandidateUseCase
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params
      const { email, name, phone, education, experience, status, skills } = request.body

      await this.updateCandidateUseCase.execute({ id, email, name, phone, education, experience, status, skills })

      return response.status(200).send()
   }

} 
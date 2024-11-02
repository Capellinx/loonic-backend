import { Request, Response } from "express";
import { DeleteCandidateUseCase } from "./delete-candidate";


export class DeleteCandidateController {
   constructor(
      private deleteCandidateUseCase: DeleteCandidateUseCase
   ){}

   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params

      await this.deleteCandidateUseCase.execute({ id })

      return response.status(204).send()
   }
}
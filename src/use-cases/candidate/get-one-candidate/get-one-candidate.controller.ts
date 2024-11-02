import { Request, Response } from "express";
import { GetOneCandidateUseCase } from "./get-one-candidate";
import { getOneCandidateSchema } from "./get-one-candidate-dto";


export class GetOneCandidateController {

   constructor(
      private getOneCandidateUseCase: GetOneCandidateUseCase
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params

      const candidate = await this.getOneCandidateUseCase.execute(id)

      return response.status(200).json(candidate)
   }
}

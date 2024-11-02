import { Request, Response } from "express";
import { GetAllCandidatesUseCase } from "./get-all-candidates";
import { getAllCandidatesSchema } from "./get-all-candidates-dto";


export class GetAllCandidatesController {
   constructor(
      private getAllCandidatesUseCase: GetAllCandidatesUseCase
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { name, skills, status, page } = request.query

      const skillsArray = Array.isArray(skills) ? skills : (skills ? [skills] : undefined);

      const params = getAllCandidatesSchema.parse({
         ...request.query,
         skills: skillsArray,
      })

      const data = await this.getAllCandidatesUseCase.execute(params)

      return response.status(200).json(data)
   }
}
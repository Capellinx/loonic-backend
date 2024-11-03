import { Status } from "@prisma/client";
import { CandidateRepository } from "../../../domain/repositories/candidate-repository";
import { GetAllCandidatesDTO } from "./get-all-candidates-dto";

export class GetAllCandidatesUseCase {

   constructor(
      private candidateRepository: CandidateRepository
   ) { }

   async execute({ skills, status, name, page = 1 }: GetAllCandidates.Params): Promise<GetAllCandidates.Output | []> {
      const [candidates, total] = await this.candidateRepository.getAllCandidates({
         skills,
         status,
         name,
         page
      })

      if (!candidates) return []

      return {
         candidates: candidates.map(candidate =>  ({
            id: candidate.id,
            name: candidate.name,
            email: candidate.email,
            status: candidate.status,
            phone: candidate.phone,
            skills: candidate.skills.map(skill => skill.name),
            experience: candidate.experience,
            education: candidate.education
         })),
         page,
         total: Math.ceil(total / 5), 
      };
   }
}

export namespace GetAllCandidates {
   export type Output = {
      candidates: {
         id: string,
         name: string,
         email: string,
         phone: string,
         status: Status,
         skills: string[],
         experience: string,
         education: string
      }[],
      page: number,
      total: number
   }

   export type Params = GetAllCandidatesDTO
}
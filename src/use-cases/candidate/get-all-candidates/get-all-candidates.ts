import { Candidate } from "@prisma/client";
import { CandidateRepository } from "../../../domain/repositories/candidate-repository";
import { GetAllCandidatesDTO } from "./get-all-candidates-dto";

export class GetAllCandidatesUseCase {

   constructor(
      private candidateRepository: CandidateRepository
   ) { }

   async execute({ skills, status, name, page }: GetAllCandidates.Params): Promise<GetAllCandidates.Output | []> {
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
            phone: candidate.phone,
            skills: candidate.skills.map(skill => skill.name),
            experience: candidate.experience,
            education: candidate.education
         })),
         page: page as number,
         total: Math.ceil(total / 10), 
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
         skills: string[],
         experience: string,
         education: string
      }[],
      page: number,
      total: number
   }

   export type Params = GetAllCandidatesDTO
}
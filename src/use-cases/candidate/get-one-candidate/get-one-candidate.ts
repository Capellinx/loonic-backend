import { Candidate } from "@prisma/client";
import { NotFoundError } from "../../../config/errors/application-errors";
import { CandidateRepository } from "../../../domain/repositories/candidate-repository";

export class GetOneCandidateUseCase {
   constructor(
      private candidateRepository: CandidateRepository
   ){}

   async execute(id: string): Promise<Candidate | null> {
      const candidate = await this.candidateRepository.findById(id)

      if(!candidate) throw new NotFoundError("Esse candidato não existe.")

      const returnedCandidate = await this.candidateRepository.getOneCandidate(id)

      return returnedCandidate
   }
}  
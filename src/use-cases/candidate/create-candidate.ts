import { randomUUID } from "crypto";
import { Candidate } from "../../domain/entity/candidate";
import { CandidateRepository } from "../../domain/repositories/candidate-repository";
import { CreateCandidateDTO } from "./create-candidate-dto";


export class CreateCandidateUseCase {

   constructor(
      private candidateRepository: CandidateRepository
   ) { }

   async execute(payload: CreateCandidateDTO): Promise<void> {
      const cadidate = await this.candidateRepository.findByEmail(payload.email)

      if (cadidate) throw new Error("Esse candidato já está cadastrado.")

      const newCandidate = new Candidate({
         id: randomUUID(),
         name: payload.name,
         email: payload.email,
         education: payload.education,
         experience: payload.education,
         phone: payload.phone,
         createdAt: new Date(),
         updatedAt: new Date()
      })


      await this.candidateRepository.create(newCandidate)
      
      return
   }
}
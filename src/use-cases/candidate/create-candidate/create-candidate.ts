import { randomUUID } from "crypto";
import { Candidate } from "../../../domain/entity/candidate";
import { CandidateRepository } from "../../../domain/repositories/candidate-repository";
import { NotFoundError } from "../../../config/errors/application-errors";
import { CreateCandidateDTO } from "./create-candidate-dto";
import { Status } from "@prisma/client";

export class CreateCandidateUseCase {

   constructor(
      private candidateRepository: CandidateRepository
   ) { }

   async execute(payload: CreateCandidateDTO): Promise<void> {
      const cadidate = await this.candidateRepository.findByEmail(payload.email as string)

      if (cadidate) throw new NotFoundError("Esse candidato já está cadastrado.")

      const newCandidate: Candidate = new Candidate({
         id: randomUUID(),
         name: payload.name as string,
         email: payload.email as string,
         education: payload.education as string,
         experience: payload.education as string,
         phone: payload.phone as string,
         status: payload.status as Status,
         skills: payload.skills as { name: string }[],
         createdAt: new Date(),
         updatedAt: new Date()
      })


      await this.candidateRepository.create(newCandidate)
      
      return
   }
}
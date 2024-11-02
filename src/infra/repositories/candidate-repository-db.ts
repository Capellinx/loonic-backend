import { prisma } from "../../../prisma/db";
import { Candidate } from "../../domain/entity/candidate";
import { CandidateRepository } from "../../domain/repositories/candidate-repository";
import { CreateCandidateDTO } from "../../use-cases/candidate/create-candidate/create-candidate-dto";


export class CandidateRepositoryDB implements CandidateRepository {
   async findByEmail(email: string): Promise<Candidate | null> {
      const candidate = await prisma.candidate.findUnique({
         where: {
            email,
         },
      })

      if (candidate) return candidate

      return null
   }

   async create(payload: CreateCandidateDTO): Promise<void> {
      await prisma.candidate.create({
         data: payload
      })

      return
   }
}
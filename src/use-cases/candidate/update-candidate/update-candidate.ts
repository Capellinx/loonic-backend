import { NotFoundError } from "../../../config/errors/application-errors"
import { CandidateRepository } from "../../../domain/repositories/candidate-repository"
import { UpdateCandidateDTO } from "./update-candidate-dto"


export class UpdateCandidateUseCase {
   constructor(
      private candidateRepository: CandidateRepository
   ) { }
   async execute({ id, email, name, phone, education, experience, status, skills }: UpdateCandidateDTO) {
      const candidate = await this.candidateRepository.findById(id as string)

      if (!candidate) throw new NotFoundError("Esse candidato não existe.")

      await this.candidateRepository.update(id as string, {
         email,
         name,
         phone,
         education,
         experience,
         status,
         skills
      })

      return
   }
}
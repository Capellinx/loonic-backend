import { NotFoundError } from "../../../config/errors/application-errors";
import { CandidateRepository } from "../../../domain/repositories/candidate-repository";
import { DeleteCandidateDTO } from "./delete-candidate-dto";

export class DeleteCandidateUseCase {

   constructor(
      private candidateRepository: CandidateRepository
   ){}

   async execute({ id }: DeleteCandidateDTO): Promise<void> {
      const candidate = await this.candidateRepository.findById(id)

      if (!candidate) throw new NotFoundError("Esse candidato não existe.")
      
      await this.candidateRepository.delete(id)

      return
   }

}

import { CandidateRepositoryDB } from '../../../infra/repositories/candidate-repository-db';
import { DeleteCandidateUseCase } from './delete-candidate';
import { DeleteCandidateController } from './delete-candidate.controller';

const candidateRepositoryDB = new CandidateRepositoryDB()

const deleteCandidateUseCase = new DeleteCandidateUseCase(candidateRepositoryDB)

const deleteCandidateController = new DeleteCandidateController(deleteCandidateUseCase)

export { deleteCandidateController }


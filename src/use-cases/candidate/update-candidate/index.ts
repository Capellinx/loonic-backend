
import { CandidateRepositoryDB } from '../../../infra/repositories/candidate-repository-db';
import { UpdateCandidateUseCase } from './update-candidate';
import { UpdateCandidateController } from './update-candidate.controller';

const candidateRepositoryDB = new CandidateRepositoryDB()

const updateCandidateUseCase = new UpdateCandidateUseCase(candidateRepositoryDB)

const updatteCandidateController = new UpdateCandidateController(updateCandidateUseCase)

export { updatteCandidateController }
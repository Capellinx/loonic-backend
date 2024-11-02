
import { CandidateRepositoryDB } from '../../../infra/repositories/candidate-repository-db';
import { GetAllCandidatesUseCase } from './get-all-candidates';
import { GetAllCandidatesController } from './get-all-candidates.controller';

const candidateRepositoryDB = new CandidateRepositoryDB()

const getAllCandidatesUseCase = new GetAllCandidatesUseCase(candidateRepositoryDB)

const getAllCandidatesController = new GetAllCandidatesController(getAllCandidatesUseCase)

export { getAllCandidatesController }



import { CandidateRepositoryDB } from '../../../infra/repositories/candidate-repository-db';
import { GetOneCandidateUseCase } from './get-one-candidate';
import { GetOneCandidateController } from './get-one-candidate.controller';

const candidateRepositoryDB = new CandidateRepositoryDB()

const getOneCandidateUseCase = new GetOneCandidateUseCase(candidateRepositoryDB)

const getOneCandidateController = new GetOneCandidateController(getOneCandidateUseCase)

export { getOneCandidateController }


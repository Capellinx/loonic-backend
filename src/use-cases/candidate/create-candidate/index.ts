import { CandidateRepositoryDB } from "../../../infra/repositories/candidate-repository-db";
import { CreateCandidateUseCase } from "./create-candidate";
import { CraeteCandidateController } from "./create-candidate.controller";

const candidateRepositoryDB = new CandidateRepositoryDB()

const createCandidateUseCase = new CreateCandidateUseCase(candidateRepositoryDB)

const craeteCandidateController = new CraeteCandidateController(createCandidateUseCase)

export { craeteCandidateController }

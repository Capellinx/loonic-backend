import { CreateCandidateDTO } from "../../use-cases/candidate/create-candidate-dto";
import { Candidate } from "../entity/candidate";

export interface CandidateRepository {
   findByEmail(email: string): Promise<Candidate | null>
   create(payload: CreateCandidateDTO): Promise<Candidate | null>
}
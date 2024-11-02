import { CreateCandidateDTO } from "../../use-cases/candidate/create-candidate/create-candidate-dto";
import { GetAllCandidatesDTO } from "../../use-cases/candidate/get-all-candidates/get-all-candidates-dto";
import { Candidate } from "../entity/candidate";

export interface CandidateRepository {
   findByEmail(email: string): Promise<Candidate | null>
   findById(id: string): Promise<Candidate | null>
   delete(id: string): Promise<void>
   create(payload: CreateCandidateDTO): Promise<void>
   getAllCandidates({name, skills, status}: GetAllCandidatesDTO): Promise<[Candidate[], number]>
   getOneCandidate(id: string): Promise<Candidate | null>
}
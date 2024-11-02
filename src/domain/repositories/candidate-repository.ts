import { Candidate } from "../entity/candidate";

export interface CandidateRepository {
   findByEmail(email: string): Promise<Candidate | null>
   create(email: any): Promise<Candidate | null>
}
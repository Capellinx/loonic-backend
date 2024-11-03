import { Status } from "@prisma/client";

interface Skill {
   name: string
   id?: string;         
   candidateId?: string; 
}
interface CandidateProps {
   id: string,
   name: string,
   email: string,
   phone: string,
   experience: string,
   education: string
   createdAt: Date
   updatedAt: Date
   status: Status
   skills: Skill[]
}

export class Candidate {
   public id: string
   public name: string
   public email: string
   public phone: string
   public experience: string
   public education: string
   public createdAt: Date
   public updatedAt: Date
   public status: Status
   public skills: Skill[]

   constructor(props: CandidateProps) {
      this.id = props.id,
      this.name = props.name,
      this.email = props.email,
      this.phone = props.phone,
      this.experience = props.experience,
      this.education = props.education,
      this.createdAt = props.createdAt
      this.updatedAt = props.updatedAt
      this.status = props.status
      this.skills = props.skills
   }
}
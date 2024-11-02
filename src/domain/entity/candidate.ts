interface Skill {
   name: string;
}
interface CandidateProps {
   id: string,
   name: string,
   email: string,
   phone: string,
   experience: string,
   education: string
   skills: Skill[]
   createdAt: Date
   updatedAt: Date
}

export class Candidate {
   public id: string
   public name: string
   public email: string
   public phone: string
   public experience: string
   public education: string
   public skills: Skill[]
   public createdAt: Date
   public updatedAt: Date

   constructor(private props: CandidateProps) {
      this.id = props.id,
      this.name = props.name,
      this.email = props.email,
      this.phone = props.phone,
      this.experience = props.experience,
      this.education = props.education,
      this.skills = props.skills
      this.createdAt = props.createdAt
      this.updatedAt = props.updatedAt
   }
}

interface ManagerProps {
   id: string
   email: string
   password: string
   createdAt: Date
   updatedAt: Date
}

export class Manager {
   public id: string
   public email: string
   public password: string
   public createdAt: Date
   public updatedAt: Date
   constructor(props: ManagerProps) {
      this.id = props.id
      this.email = props.email
      this.password = props.password
      this.createdAt = props.createdAt
      this.updatedAt = props.updatedAt
   }
}
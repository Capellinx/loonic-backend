import { RegisterManagerDTO } from "../../use-cases/manager/register-manager/register-manager-dto"
import { Manager } from "../entity/manager"

export interface ManagerRepository {
   findByEmail(email: string): Promise<Manager| null>
   create({email, password}: RegisterManagerDTO): Promise<void>
}
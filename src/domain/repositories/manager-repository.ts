import { Manager } from "../entity/manager"

export interface ManagerRepository {
   findByEmail(email: string): Promise<Omit<Manager, 'password'> | null>
   create(manager: Manager): Promise<any>
}
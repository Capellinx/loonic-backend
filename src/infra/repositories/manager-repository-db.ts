import { prisma } from "../../../prisma/db";
import { Manager } from "../../domain/entity/manager";
import { ManagerRepository } from "../../domain/repositories/manager-repository";
import { RegisterManagerDTO } from "../../use-cases/manager/register-manager/register-manager-dto";


export class ManagerRepositoryDB implements ManagerRepository {
   async findByEmail(email: string): Promise<Manager | null> {
      const manager = await prisma.manager.findUnique({
         where: {
            email
         }
      })

      if (!manager) return null

      return manager
   }

   async create({ email, password }: RegisterManagerDTO): Promise<any> {
      return await prisma.manager.create({
         data: {
            email,
            password
         }
      })

   }

}
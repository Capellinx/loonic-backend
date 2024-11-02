import { BadRequestError } from "../../../config/errors/application-errors";
import { Manager } from "../../../domain/entity/manager";
import { ManagerRepository } from "../../../domain/repositories/manager-repository";
import { RegisterManagerDTO } from "./register-manager-dto";
import { randomUUID } from 'crypto';
import { EncryptService } from '../../../domain/services/encrypt.service';


export class RegisterManagerUseCase {

   constructor(
      private managerRepository: ManagerRepository,
      private encryptService: EncryptService
   ) { }

   async execute({ email, password }: RegisterManagerDTO) {
      const manager = await this.managerRepository.findByEmail(email)

      if (manager) throw new BadRequestError("Esse email ja existe.")

      const newPassword = await this.encryptService.hashPassword(password)

      const newManager = new Manager({
         id: randomUUID(),
         email,
         password: newPassword,
         createdAt: new Date(),
         updatedAt: new Date()
      })

      await this.managerRepository.create(newManager)
      
      return
   }
}
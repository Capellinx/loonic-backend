import { BadRequestError, NotFoundError } from "../../../config/errors/application-errors";
import { ManagerRepository } from "../../../domain/repositories/manager-repository";
import { EncryptService } from "../../../domain/services/encrypt.service";
import { TokenService } from "../../../domain/services/token.service";
import { LoginManagerDTO } from "./login-manager-dto";


export class LoginManagerUseCase {
   constructor(
      private managerRepository: ManagerRepository,
      private encryptService: EncryptService,
      private tokenService: TokenService
   ) { }

   async execute({ email, password }: LoginManagerDTO): Promise<LoginManagerUseCase.Output> {
      const manager = await this.managerRepository.findByEmail(email)

      if (!manager) throw new NotFoundError("Não existe um gerente com esse email.")

      const passwordMatch = await this.encryptService.comparePassword(password, manager.password)

      if(!passwordMatch) throw new BadRequestError("Senha incorreta.")

      const token = await this.tokenService.generateToken({ id: manager.id })

      return {
         access_token: token,
         manager: {
            email: manager.email
         }
      }

   }
}

export namespace LoginManagerUseCase {
   export type Output = {
      access_token: string
      manager: {
         email: string
      }
   }
}
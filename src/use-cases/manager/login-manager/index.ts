import { ManagerRepositoryDB } from "../../../infra/repositories/manager-repository-db";
import { BcryptService } from "../../../infra/services/bcrypt.service";
import { JsonWebTokenService } from "../../../infra/services/jsonwebtoken.service";
import { LoginManagerUseCase } from "./login-manager";
import { LoginManagerController } from "./login-manager.controller";

const managerRepositoryDB = new ManagerRepositoryDB()

const bcryptService = new BcryptService()

const jsonwebtokenService = new JsonWebTokenService()

const loginManagerUsecase = new LoginManagerUseCase(
   managerRepositoryDB,
   bcryptService,
   jsonwebtokenService
)

const loginManagerController = new LoginManagerController(loginManagerUsecase)

export { loginManagerController }
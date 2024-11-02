import { ManagerRepositoryDB } from "../../../infra/repositories/manager-repository-db";
import { BcryptService } from "../../../infra/services/bcrypt.service";
import { RegisterManagerUseCase } from "./register-manager";
import { RegisterManagerController } from "./register-manager.controller";

const managerRepositoryDB = new ManagerRepositoryDB()

const bcryptService = new BcryptService()

const registerManagerUsecase = new RegisterManagerUseCase(
   managerRepositoryDB,
   bcryptService
)

const registerManagerController = new RegisterManagerController(registerManagerUsecase)

export { registerManagerController }

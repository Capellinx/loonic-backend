import { EncryptService } from "../../domain/services/encrypt.service";
import bcrypt from 'bcrypt';

export class BcryptLogin implements EncryptService {
   private static readonly SALT_ROUNDS = 10

   async hashPassword(password: string): Promise<string> {
      return await bcrypt.hash(password, BcryptLogin.SALT_ROUNDS)
   }

   async comparePassword(password: string, passwordHash: string): Promise<boolean> {
      return await bcrypt.compare(password, passwordHash)
   }
}
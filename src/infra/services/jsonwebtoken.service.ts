import Jwt from "jsonwebtoken";
import { TokenService } from "../../domain/services/token.service";
import { env } from "../../config/env";

export class JsonWebTokenService implements TokenService {
   async generateToken(payload: Record<string, any>): Promise<string> {
      const accessToken = Jwt.sign(payload, env.JWT_SECRET, { expiresIn: '1d' })
      return accessToken
   }

   async refreshToken(id: number): Promise<string> {
      const refreshToken = Jwt.sign({ id }, env.JWT_REFRESH_SECRET, { expiresIn: '7d' })
      return refreshToken
   }
}
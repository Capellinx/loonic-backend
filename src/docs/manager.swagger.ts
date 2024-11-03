import { Router } from "express";
import { registerManagerSchema } from "../use-cases/manager/register-manager/register-manager-dto";
import { registerManagerController } from "../use-cases/manager/register-manager";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { loginManagerSchema } from "../use-cases/manager/login-manager/login-manager-dto";
import { loginManagerController } from "../use-cases/manager/login-manager";

export const managerRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Manager
 *   description: Gerenciamento de gerentes
 */

/**
 * @swagger
 * /manager:
 *   post:
 *     summary: Registra um novo gerente
 *     tags: [Manager]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Gerente registrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
managerRouter.post(
   "/manager",
   ZodRequestValidate.execute({ body: registerManagerSchema }),
   async (request, response) => {
      await registerManagerController.handle(request, response);
   }
);

/**
 * @swagger
 * /manager/login:
 *   post:
 *     summary: Realiza o login de um gerente
 *     tags: [Manager]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
managerRouter.post(
   "/manager/login",
   ZodRequestValidate.execute({ body: loginManagerSchema }),
   async (request, response) => {
      await loginManagerController.handle(request, response);
   }
);

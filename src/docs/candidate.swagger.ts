
import { Router } from "express";
import { craeteCandidateController } from "../use-cases/candidate/create-candidate";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCandidateSchema } from "../use-cases/candidate/create-candidate/create-candidate-dto";
import { getAllCandidatesSchema } from '../use-cases/candidate/get-all-candidates/get-all-candidates-dto';
import { getAllCandidatesController } from "../use-cases/candidate/get-all-candidates";
import { deleteCandidateController } from "../use-cases/candidate/delete-candidate";
import { deleteCandidateSchema } from "../use-cases/candidate/delete-candidate/delete-candidate-dto";
import { getOneCandidateController } from "../use-cases/candidate/get-one-candidate";
import { getOneCandidateSchema } from "../use-cases/candidate/get-one-candidate/get-one-candidate-dto";
import { updateCandidateSchema } from "../use-cases/candidate/update-candidate/update-candidate-dto";
import { updatteCandidateController } from "../use-cases/candidate/update-candidate";
import { VerifyToken } from "../middleware/verify-token.middleware";

export const candidateRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Candidate
 *   description: Gerenciamento de candidatos
 */

/**
 * @swagger
 * /candidate:
 *   post:
 *     summary: Cria um novo candidato
 *     tags: [Candidate]
 *     security:
 *       - bearerAuth: []  
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
 *               phone:
 *                 type: string
 *               experience:
 *                 type: string
 *               education:
 *                 type: string
 *               status:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - skills
 *               - experience
 *               - education
 *     responses:
 *       201:
 *         description: Candidato criado com sucesso
 *       404:
 *         description: Candidato já cadastrado
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
candidateRouter.post(
   "/candidate",
   VerifyToken.execute,
   ZodRequestValidate.execute({ body: createCandidateSchema }),
   async (request, response) => {
      await craeteCandidateController.handle(request, response);
   }
);

/**
 * @swagger
 * /candidate:
 *   get:
 *     summary: Retorna todos os candidatos
 *     tags: [Candidate]
 *     responses:
 *       200:
 *         description: Lista de candidatos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 candidates:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       status:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       skills:
 *                         type: array
 *                         items:
 *                           type: string
 *                       experience:
 *                         type: string
 *                       education:
 *                         type: string
 *                 page:
 *                   type: integer
 *                 total:
 *                   type: integer
 *       500:
 *         description: Erro interno do servidor
 */
candidateRouter.get(
   "/candidate",
   ZodRequestValidate.execute({ params: getAllCandidatesSchema }),
   async (request, response) => {
      await getAllCandidatesController.handle(request, response);
   }
);

/**
 * @swagger
 * /candidate/{id}:
 *   delete:
 *     summary: Exclui um candidato pelo ID
 *     tags: [Candidate]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do candidato a ser excluído
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Candidato excluído com sucesso
 *       404:
 *         description: Candidato não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
candidateRouter.delete(
   "/candidate/:id",
   VerifyToken.execute,
   ZodRequestValidate.execute({ params: deleteCandidateSchema }),
   async (request, response) => {
      await deleteCandidateController.handle(request, response);
   }
);

/**
 * @swagger
 * /candidate/{id}:
 *   get:
 *     summary: Retorna um candidato pelo ID
 *     tags: [Candidate]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do candidato a ser retornado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Candidato encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 education:
 *                   type: string
 *                 experience:
 *                   type: string
 *                 status:
 *                   type: string
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *       404:
 *         description: Candidato não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
candidateRouter.get(
   "/candidate/:id",
   ZodRequestValidate.execute({ params: getOneCandidateSchema }),
   async (request, response) => {
      await getOneCandidateController.handle(request, response);
   }
);
/**
 * @swagger
 * /candidate/{id}:
 *   patch:
 *     summary: Atualiza um candidato pelo ID
 *     tags: [Candidate]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do candidato a ser atualizado
 *         schema:
 *           type: string
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
 *               phone:
 *                 type: string
 *               experience:
 *                 type: string
 *               education:
 *                 type: string
 *               status:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *     responses:
 *       200:
 *         description: Candidato atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Candidato não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
candidateRouter.patch(
   "/candidate/:id",
   VerifyToken.execute,
   ZodRequestValidate.execute({ body: updateCandidateSchema }),
   async (request, response) => {
      await updatteCandidateController.handle(request, response);
   }
); 

import { z } from "zod";


export const updateCandidateSchema = z.object({
   id: z.string().optional(),
   email: z.string().email().optional(),
   name: z.string().min(1).optional(),
   phone: z.string().optional(),
   education: z.string().optional(),
   experience: z.string().optional(),
   status: z.enum(["DISPONIVEL", "INDISPONIVEL", "EM_PROCESSO"]).optional(),
   skills: z.array(z.object({
      name: z.string()
   })).optional()
})

export type UpdateCandidateDTO = z.infer<typeof updateCandidateSchema>
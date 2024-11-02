import { z } from "zod";


export const getAllCandidatesSchema = z.object({
   page: z.coerce.number().default(1).optional(),
   name: z.string().min(1).optional(),
   status: z.enum([
      "DISPONIVEL",
      "INDISPONIVEL",
      "EM_PROCESSO"
   ]).optional(),
   skills: z.array(z.string()).optional(),
})

export type GetAllCandidatesDTO = z.infer<typeof getAllCandidatesSchema>
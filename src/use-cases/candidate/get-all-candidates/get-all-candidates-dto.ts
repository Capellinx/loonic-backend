import { z } from "zod";


export const getAllCandidatesSchema = z.object({
   id: z.string(),
})

export type GetAllCandidatesDTO = z.infer<typeof getAllCandidatesSchema>
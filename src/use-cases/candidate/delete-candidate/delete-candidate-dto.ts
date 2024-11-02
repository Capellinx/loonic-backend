import { z } from "zod";


export const deleteCandidateSchema = z.object({
   id: z.string()
})

export type DeleteCandidateDTO = z.infer<typeof deleteCandidateSchema>
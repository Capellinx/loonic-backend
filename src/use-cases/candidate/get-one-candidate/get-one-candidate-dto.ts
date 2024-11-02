import { z } from "zod"

export const getOneCandidateSchema = z.object({
   id: z.string()
})

export type GetOneCandidateDTO = z.infer<typeof getOneCandidateSchema>
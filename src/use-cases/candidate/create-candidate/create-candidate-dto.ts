import { Satatus } from "@prisma/client";
import { z } from "zod";

export const createCandidateSchema = z.object({
   email: z.string().email(),
   name: z.string().min(1),
   phone: z.string(),
   education: z.string(),
   experience: z.string(),
   status: z.nativeEnum(Satatus),
   skills: z.array(z.object({
      name: z.string()
   }))
})

export type CreateCandidateDTO = z.infer<typeof createCandidateSchema>
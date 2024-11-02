import { z } from "zod";

export const loginManagerSchema = z.object({
   email: z.string().email(),
   password: z.string().min(6),
})

export type LoginManagerDTO = z.infer<typeof loginManagerSchema>
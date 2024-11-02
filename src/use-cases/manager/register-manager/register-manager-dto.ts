import { z } from "zod";

export const registerManagerSchema = z.object({
   email: z.string().email(),
   password: z.string().min(6),
})

export type RegisterManagerDTO = z.infer<typeof registerManagerSchema>
import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(1, "Nombre obligatorio"),
    email: z.email(),
    password: z.string().min(8)
});

export const updateUserSchema = z.object({
    name: z.string().optional(),
    email: z.email().optional(),
    password: z.string().min(8).optional()
});
import { z } from "zod";

export const createAccountSchema = z.object({
accountNumber: z.string().length(14),
name: z.string().min(1),
type: z.string().min(1),
balance: z.number()
});

export const updateAccountSchema = z.object({
accountNumber: z.string().length(14).optional(),
name: z.string().min(1).optional(),
type: z.string().min(1).optional(),
balance: z.number().optional()
});

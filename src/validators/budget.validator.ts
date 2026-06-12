import { z } from "zod";

export const createBudgetSchema = z.object({
amount: z.number(),
month: z.number().min(1).max(12),
year: z.number()
});

export const updateBudgetSchema = z.object({
amount: z.number().optional(),
month: z.number().min(1).max(12).optional(),
year: z.number().optional()
});

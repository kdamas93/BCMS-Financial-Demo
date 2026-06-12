import { z } from "zod";

export const createTransactionSchema = z.object({
amount: z.number(),
description: z.string().optional(),
type: z.enum(["INCOME", "EXPENSE"]),
accountId: z.number(),
categoryId: z.number()
});

export const updateTransactionSchema = z.object({
amount: z.number().optional(),
description: z.string().optional(),
type: z.enum(["INCOME", "EXPENSE"]).optional(),
accountId: z.number().optional(),
categoryId: z.number().optional()
});

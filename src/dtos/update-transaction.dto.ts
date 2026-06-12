export interface UpdateTransactionDto {
    amount?: number;
    description?: string;
    type?: "INCOME" | "EXPENSE";
    accountId?: number;
    categoryId?: number;
    }
    
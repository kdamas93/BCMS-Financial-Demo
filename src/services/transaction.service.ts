import { CreateTransactionDto } from "../dtos/create-transaction.dto";
import { UpdateTransactionDto } from "../dtos/update-transaction.dto";
import { TransactionRepository } from "../repositories/transaction.repository";

export class TransactionService {


private transactionRepository = new TransactionRepository();

async getAllTransactions() {
    return this.transactionRepository.findAll();
}

async getTransactionById(id: number) {
    return this.transactionRepository.findById(id);
}

async createTransaction(data: CreateTransactionDto) {
    return this.transactionRepository.create(data);
}

async updateTransaction(id: number, data: UpdateTransactionDto) {
    return this.transactionRepository.update(id, data);
}

async deleteTransaction(id: number) {
    return this.transactionRepository.delete(id);
}


}

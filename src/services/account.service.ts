import { CreateAccountDto } from "../dtos/create-account.dto";
import { UpdateAccountDto } from "../dtos/update-account.dto";
import { AccountRepository } from "../repositories/account.repository";

export class AccountService {

private accountRepository = new AccountRepository();

async getAllAccounts() {
    return this.accountRepository.findAll();
}

async getAccountById(id: number) {
    return this.accountRepository.findById(id);
}

async createAccount(data: CreateAccountDto) {
    return this.accountRepository.create(data);
}

async updateAccount(id: number, data: UpdateAccountDto) {
    return this.accountRepository.update(id, data);
}

async deleteAccount(id: number) {
    return this.accountRepository.delete(id);
}

}
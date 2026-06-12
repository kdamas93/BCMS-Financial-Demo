import { CreateBudgetDto } from "../dtos/create-budget.dto";
import { UpdateBudgetDto } from "../dtos/update-budget.dto";
import { BudgetRepository } from "../repositories/budget.repository";

export class BudgetService {


private budgetRepository = new BudgetRepository();

async getAllBudgets() {
    return this.budgetRepository.findAll();
}

async getBudgetById(id: number) {
    return this.budgetRepository.findById(id);
}

async createBudget(data: CreateBudgetDto) {
    return this.budgetRepository.create(data);
}

async updateBudget(id: number, data: UpdateBudgetDto) {
    return this.budgetRepository.update(id, data);
}

async deleteBudget(id: number) {
    return this.budgetRepository.delete(id);
}


}

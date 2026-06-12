import {prisma} from "../config/prisma";
import { CreateBudgetDto } from "../dtos/create-budget.dto";
import { UpdateBudgetDto } from "../dtos/update-budget.dto";

export class BudgetRepository {


async findAll() {
    return prisma.budget.findMany();
}

async findById(id: number) {
    return prisma.budget.findUnique({
        where: { id }
    });
}

async create(data: CreateBudgetDto) {
    return prisma.budget.create({
        data
    });
}

async update(id: number, data: UpdateBudgetDto) {
    return prisma.budget.update({
        where: { id },
        data
    });
}

async delete(id: number) {
    return prisma.budget.delete({
        where: { id }
    });
}


}

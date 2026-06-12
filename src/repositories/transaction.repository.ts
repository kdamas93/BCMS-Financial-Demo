import {prisma} from "../config/prisma";
import { CreateTransactionDto } from "../dtos/create-transaction.dto";
import { UpdateTransactionDto } from "../dtos/update-transaction.dto";

export class TransactionRepository {


async findAll() {
    return prisma.transaction.findMany({
        include: {
            account: true,
            category: true
        }
    });
}

async findById(id: number) {
    return prisma.transaction.findUnique({
        where: { id },
        include: {
            account: true,
            category: true
        }
    });
}

async create(data: CreateTransactionDto) {
    return prisma.transaction.create({
        data
    });
}

async update(id: number, data: UpdateTransactionDto) {
    return prisma.transaction.update({
        where: { id },
        data
    });
}

async delete(id: number) {
    return prisma.transaction.delete({
        where: { id }
    });
}


}

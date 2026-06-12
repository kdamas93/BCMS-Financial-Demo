import {prisma} from "../config/prisma";
import { CreateAccountDto } from "../dtos/create-account.dto";
import { UpdateAccountDto } from "../dtos/update-account.dto";

export class AccountRepository {

async findAll() {
    return prisma.account.findMany();
}

async findById(id: number) {
    return prisma.account.findUnique({
        where: { id }
    });
}

async create(data: CreateAccountDto) {
    return prisma.account.create({
        data
    });
}

async update(id: number, data: UpdateAccountDto) {
    return prisma.account.update({
        where: { id },
        data
    });
}

async delete(id: number) {
    return prisma.account.delete({
        where: { id }
    });
}

}
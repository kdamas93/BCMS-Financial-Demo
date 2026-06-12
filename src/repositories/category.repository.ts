import {prisma} from "../config/prisma";
import { CreateCategoryDto } from "../dtos/create-category.dto";
import { UpdateCategoryDto } from "../dtos/update-category.dto";

export class CategoryRepository {

async findAll() {
    return prisma.category.findMany();
}

async findById(id: number) {
    return prisma.category.findUnique({
        where: { id }
    });
}

async create(data: CreateCategoryDto) {
    return prisma.category.create({
        data
    });
}

async update(id: number, data: UpdateCategoryDto) {
    return prisma.category.update({
        where: { id },
        data
    });
}

async delete(id: number) {
    return prisma.category.delete({
        where: { id }
    });
}

}
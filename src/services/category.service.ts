import { CreateCategoryDto } from "../dtos/create-category.dto";
import { UpdateCategoryDto } from "../dtos/update-category.dto";
import { CategoryRepository } from "../repositories/category.repository";

export class CategoryService {

private categoryRepository = new CategoryRepository();

async getAllCategories() {
    return this.categoryRepository.findAll();
}

async getCategoryById(id: number) {
    return this.categoryRepository.findById(id);
}

async createCategory(data: CreateCategoryDto) {
    return this.categoryRepository.create(data);
}

async updateCategory(id: number, data: UpdateCategoryDto) {
    return this.categoryRepository.update(id, data);
}

async deleteCategory(id: number) {
    return this.categoryRepository.delete(id);
}

}
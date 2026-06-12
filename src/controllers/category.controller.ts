import { Request, Response, NextFunction } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController {

private categoryService = new CategoryService();

getAllCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const categories = await this.categoryService.getAllCategories();

        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

getCategoryById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const category = await this.categoryService.getCategoryById(
            Number(req.params.id)
        );

        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
};

createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const category = await this.categoryService.createCategory(req.body);

        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

updateCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const category = await this.categoryService.updateCategory(
            Number(req.params.id),
            req.body
        );

        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
};

deleteCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await this.categoryService.deleteCategory(Number(req.params.id));

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

}
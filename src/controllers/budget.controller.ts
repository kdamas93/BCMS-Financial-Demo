import { Request, Response, NextFunction } from "express";
import { BudgetService } from "../services/budget.service";

export class BudgetController {


private budgetService = new BudgetService();

getAllBudgets = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const budgets = await this.budgetService.getAllBudgets();

        res.status(200).json(budgets);
    } catch (error) {
        next(error);
    }
};

getBudgetById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const budget = await this.budgetService.getBudgetById(
            Number(req.params.id)
        );

        res.status(200).json(budget);
    } catch (error) {
        next(error);
    }
};

createBudget = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const budget = await this.budgetService.createBudget(req.body);

        res.status(201).json(budget);
    } catch (error) {
        next(error);
    }
};

updateBudget = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const budget = await this.budgetService.updateBudget(
            Number(req.params.id),
            req.body
        );

        res.status(200).json(budget);
    } catch (error) {
        next(error);
    }
};

deleteBudget = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await this.budgetService.deleteBudget(
            Number(req.params.id)
        );

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};


}

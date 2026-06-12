import { Router } from "express";
import { BudgetController } from "../controllers/budget.controller";

const router = Router();

const budgetController = new BudgetController();

router.get("/", budgetController.getAllBudgets);

router.get("/:id", budgetController.getBudgetById);

router.post("/", budgetController.createBudget);

router.put("/:id", budgetController.updateBudget);

router.delete("/:id", budgetController.deleteBudget);

export default router;

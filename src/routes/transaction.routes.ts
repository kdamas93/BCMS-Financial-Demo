import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";

const router = Router();

const transactionController = new TransactionController();

router.get("/", transactionController.getAllTransactions);

router.get("/:id", transactionController.getTransactionById);

router.post("/", transactionController.createTransaction);

router.put("/:id", transactionController.updateTransaction);

router.delete("/:id", transactionController.deleteTransaction);

export default router;

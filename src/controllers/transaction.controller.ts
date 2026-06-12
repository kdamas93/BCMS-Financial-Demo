import { Request, Response, NextFunction } from "express";
import { TransactionService } from "../services/transaction.service";

export class TransactionController {


private transactionService = new TransactionService();

getAllTransactions = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const transactions = await this.transactionService.getAllTransactions();

        res.status(200).json(transactions);
    } catch (error) {
        next(error);
    }
};

getTransactionById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const transaction = await this.transactionService.getTransactionById(
            Number(req.params.id)
        );

        res.status(200).json(transaction);
    } catch (error) {
        next(error);
    }
};

createTransaction = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const transaction = await this.transactionService.createTransaction(
            req.body
        );

        res.status(201).json(transaction);
    } catch (error) {
        next(error);
    }
};

updateTransaction = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const transaction = await this.transactionService.updateTransaction(
            Number(req.params.id),
            req.body
        );

        res.status(200).json(transaction);
    } catch (error) {
        next(error);
    }
};

deleteTransaction = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await this.transactionService.deleteTransaction(
            Number(req.params.id)
        );

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};


}

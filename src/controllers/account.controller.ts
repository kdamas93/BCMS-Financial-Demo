import { Request, Response, NextFunction } from "express";
import { AccountService } from "../services/account.service";

export class AccountController {

private accountService = new AccountService();

getAllAccounts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const accounts = await this.accountService.getAllAccounts();

        res.status(200).json(accounts);
    } catch (error) {
        next(error);
    }
};

getAccountById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const account = await this.accountService.getAccountById(
            Number(req.params.id)
        );

        res.status(200).json(account);
    } catch (error) {
        next(error);
    }
};

createAccount = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const account = await this.accountService.createAccount(req.body);

        res.status(201).json(account);
    } catch (error) {
        next(error);
    }
};

updateAccount = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const account = await this.accountService.updateAccount(
            Number(req.params.id),
            req.body
        );

        res.status(200).json(account);
    } catch (error) {
        next(error);
    }
};

deleteAccount = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await this.accountService.deleteAccount(Number(req.params.id));

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

}
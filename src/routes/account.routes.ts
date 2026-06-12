import { Router } from "express";
import { AccountController } from "../controllers/account.controller";

const router = Router();
const accountController = new AccountController();

router.get("/", accountController.getAllAccounts);

router.get("/:id", accountController.getAccountById);

router.post("/", accountController.createAccount);

router.put("/:id", accountController.updateAccount);

router.delete("/:id", accountController.deleteAccount);

export default router;

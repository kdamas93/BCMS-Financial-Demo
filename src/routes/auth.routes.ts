import { Router } from "express";

import { AuthController }
from "../controllers/auth.controller";

console.log("AUTH ROUTES LOADED");

const router = Router();

const authController = new AuthController();

router.post(
    "/login",
    authController.login
);

router.post(
    "/register",
    authController.register
);

export default router;
import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { validate } from "../middlewares/validation.middleware";
import { createUserSchema } from "../validators/user.validator";
import { authMiddleware } from "../auth/auth.middleware";

const router = Router();

const userController = new UserController();

router.get(
    "/",
    authMiddleware,
    userController.getUsers
);

router.get(
    "/:id",
    userController.getUserById
);

router.post(
    "/",
    validate(createUserSchema),
    userController.createUser
);

router.put(
    "/:id",
    userController.updateUser
);

router.delete(
    "/:id",
    userController.deleteUser
);

export default router;
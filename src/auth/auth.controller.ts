import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {

    private authService = new AuthService();

    login = async (
        req: Request,
        res: Response
    ) => {

        try {

            const {
                email,
                password
            } = req.body;

            const result = await this.authService.login(
                email,
                password
            );

            res.status(200).json(result);

        } catch (error) {

            res.status(401).json({
                message: "Invalid credentials"
            });

        }

    };

}
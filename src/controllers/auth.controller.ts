import {
    Request,
    Response
} from "express";

import { AuthService }
    from "../services/auth.service";

export class AuthController {

    private authService =
        new AuthService();

    login = async (
        req: Request,
        res: Response
    ) => {

        try {

            const {
                email,
                password
            } = req.body;

            const result =
                await this.authService.login(
                    email,
                    password
                );

            res.status(200)
                .json(result);

        } catch (error) {

            res.status(401)
                .json({

                    message:

                        error instanceof Error

                            ? error.message

                            : "Login failed"

                });

        }

    };

    register = async (
        req: Request,
        res: Response
    ) => {

        try {

            const {
                name,
                email,
                password
            } = req.body;

            const result =
                await this.authService.register(

                    name,
                    email,
                    password

                );

            res.status(201)
                .json(result);

        } catch (error) {

            res.status(400)
                .json({

                    message:

                        error instanceof Error

                            ? error.message

                            : "Register failed"

                });

        }

    };

}
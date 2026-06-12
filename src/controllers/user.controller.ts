import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {

    private userService = new UserService();

    getUsers = async (
        req: Request,
        res: Response
    ) => {

        try {

            const users = await this.userService.getUsers();

            res.status(200).json(users);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: 'Internal server error'
            });

        }

    };

    getUserById = async (
        req: Request,
        res: Response
    ) => {

        try {

            const id = Number(req.params.id);

            const user = await this.userService.getUserById(id);

            if (!user) {

                res.status(404).json({
                    message: 'User not found'
                });

                return;
            }

            res.status(200).json(user);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: 'Internal server error'
            });

        }

    };

    createUser = async (
        req: Request,
        res: Response
    ) => {

        try {

            const {
                name,
                email,
                password
            } = req.body;

            const user = await this.userService.createUser(
                name,
                email,
                password
            );

            res.status(201).json(user);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: 'Internal server error'
            });

        }

    };

    updateUser = async (
        req: Request,
        res: Response
    ) => {
    
        try {
    
            const id = Number(req.params.id);
    
            const {
                name,
                email,
                password
            } = req.body;
    
            const user = await this.userService.updateUser(
                id,
                name,
                email,
                password
            );
    
            res.status(200).json(user);
    
        } catch (error) {
    
            console.error(error);
    
            res.status(500).json({
                message: 'Internal server error'
            });
    
        }
    
    };

    deleteUser = async (
        req: Request,
        res: Response
    ) => {
    
        try {
    
            const id = Number(req.params.id);
    
            await this.userService.deleteUser(id);
    
            res.status(204).send();
    
        } catch (error) {
    
            console.error(error);
    
            res.status(500).json({
                message: 'Internal server error'
            });
    
        }
    
    };

}
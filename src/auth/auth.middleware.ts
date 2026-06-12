import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./jwt";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {

            return res.status(401).json({
                message: "Token not provided"
            });

        }

        const token = authHeader.split(" ")[1];

        verifyToken(token);

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid token"
        });

    }

};
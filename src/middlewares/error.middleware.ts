import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    logger.error({
        message: error.message,
        stack: error.stack,
        method: req.method,
        url: req.originalUrl
    });

    res.status(500).json({
        success: false,
        message: error.message
    });

};
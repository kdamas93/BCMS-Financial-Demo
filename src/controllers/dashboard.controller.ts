import { Request, Response, NextFunction } from "express";
import { DashboardService } from "../services/dashboard.service";

export class DashboardController {


private dashboardService = new DashboardService();

getSummary = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const summary = await this.dashboardService.getSummary();

        res.status(200).json(summary);

    } catch (error) {

        next(error);

    }

};


}

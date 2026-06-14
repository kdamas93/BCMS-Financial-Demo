import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import healthRoutes from './routes/health.routes';
import userRoutes from './routes/user.routes';
import { errorMiddleware } from "./middlewares/error.middleware";


import authRoutes from "./routes/auth.routes";
import accountRoutes from "./routes/account.routes";
import categoryRoutes from "./routes/category.routes";
import transactionRoutes from "./routes/transaction.routes";
import budgetRoutes from "./routes/budget.routes";
import dashboardRoutes from "./routes/dashboard.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use('/health', healthRoutes);
app.use('/api/users', userRoutes);
app.use(errorMiddleware);
app.use("/api/auth", authRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/dashboard", dashboardRoutes);



app.get('/', (req, res) => {
    res.json({
        message: 'BCMS Financial API running'
    });
});





export default app;
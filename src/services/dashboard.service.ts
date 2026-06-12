import {prisma} from "../config/prisma";

export class DashboardService {


async getSummary() {

    const incomes = await prisma.transaction.aggregate({
        _sum: {
            amount: true
        },
        where: {
            type: "INCOME"
        }
    });

    const expenses = await prisma.transaction.aggregate({
        _sum: {
            amount: true
        },
        where: {
            type: "EXPENSE"
        }
    });

    const totalIncome = Number(incomes._sum.amount ?? 0);

    const totalExpense = Number(expenses._sum.amount ?? 0);

    const balance = totalIncome - totalExpense;

    return {
        totalIncome,
        totalExpense,
        balance
    };

}


}

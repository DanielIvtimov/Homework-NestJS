import { Currency } from "../entity/budget.interface";
export declare class BudgetDTO {
    title: string;
    balance: number;
    currency: Currency;
    expenses: ExpenseDTO[];
    incomes: IncomeDTO[];
}
export declare class BudgetUpdateDTO {
    title?: string;
    balance?: number;
    currency?: Currency;
}
export declare class ExpenseDTO {
    amount: number;
    description: string;
    budgetId: string;
}
export declare class IncomeDTO {
    amount: number;
    description: string;
    budgetId: string;
}

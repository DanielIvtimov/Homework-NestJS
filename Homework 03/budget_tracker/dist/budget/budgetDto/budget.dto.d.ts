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
    id: string;
    amount: number;
    description: string;
}
export declare class IncomeDTO {
    id: string;
    amount: number;
    description: string;
}

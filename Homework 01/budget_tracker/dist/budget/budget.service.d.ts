export interface Expense {
    id: string;
    amount: number;
    description: string;
}
export interface Income {
    id: string;
    amount: number;
    description: string;
}
export interface Budget {
    id: string;
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
}
export declare enum Currency {
    EUR = "EUR",
    USD = "USD",
    MKD = "MKD"
}
export declare class BudgetService {
    private budgets;
    constructor();
    private dataBudgets;
    readBudgets(): Budget[];
}

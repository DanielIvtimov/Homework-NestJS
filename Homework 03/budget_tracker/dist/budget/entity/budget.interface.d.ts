export interface Expense {
    amount: number;
    description: string;
}
export interface Income {
    amount: number;
    description: string;
}
export interface Budget {
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

export interface Expense {
    // id: string;
    amount: number;
    description: string;
    budgetId:string
}

export interface Income {
    // id: string;
    amount: number;
    description: string;
    budgetId:string
}

export interface Budget {
    // id: string;
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
}

export enum Currency {
    EUR = 'EUR',
    USD = 'USD',
    MKD = 'MKD'
}
import { ExpenseORMEntity } from './expenses.entity';
export declare class BudgetORMEntity {
    id: string;
    title: string;
    balance: number;
    currency: string;
    expenses: ExpenseORMEntity[];
    incomes: IncomeORMEntity[];
}
export declare class IncomeORMEntity {
    id: string;
    amount: number;
    description: string;
    budget: BudgetORMEntity;
}

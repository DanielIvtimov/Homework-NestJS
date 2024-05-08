import { BudgetORMEntity } from "./budget.entity";
export declare class ExpenseORMEntity {
    id: string;
    amount: number;
    description: string;
    budget: BudgetORMEntity;
    budgetId: string;
}

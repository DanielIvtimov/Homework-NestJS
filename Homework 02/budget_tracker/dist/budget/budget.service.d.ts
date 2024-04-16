import { Budget } from './entity/budget.entityes';
export declare class BudgetService {
    private budgets;
    constructor();
    readBudgets(): Budget[];
    createBudgets(budgetData: Budget): string;
    getBudgetById(id: string): Budget;
    deleteBudgetById(id: string): Budget;
    updateBudgetById(id: string, updateBudgetData: Budget): Budget;
}

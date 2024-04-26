import { Budget } from "./entity/budget.entityes";
export declare class BudgetService {
    private budgets;
    constructor();
    readBugets(): Budget[];
    createBudget(budgetData: Budget): string;
    getBudgetById(id: string): Budget;
    deleteBudgetById(id: string): Budget;
    updateBudgetById(id: string, updateData: Budget): Budget;
}

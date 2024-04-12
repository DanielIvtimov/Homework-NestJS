import { BudgetService, Budget } from './budget.service';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Budget[];
}

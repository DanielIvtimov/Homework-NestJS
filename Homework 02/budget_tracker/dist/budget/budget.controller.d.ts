import { BudgetService } from "./budget.service";
import { Budget } from "./entity/budget.entityes";
import { BudgetDTO } from './budgetDto/budget.dto';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Budget[];
    createBudget(budgetDataFormat: BudgetDTO): string;
    createBudgetById(id: string): Budget;
    deleteBudgetById(id: string): Budget;
    updateBudgetById(id: string, updateBudgetData: BudgetDTO): Budget;
}

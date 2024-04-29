import { BudgetService } from './budget.service';
import { BudgetDTO } from './budgetDto/budget.dto';
import { BudgetORMEntity } from './entity/budget.entity';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    readBudgets(): Promise<BudgetORMEntity[]>;
    createBudget(budgetData: BudgetDTO): Promise<BudgetORMEntity>;
    getBudgetById(id: string): Promise<BudgetORMEntity>;
    deleteBudget(id: string): Promise<void>;
}

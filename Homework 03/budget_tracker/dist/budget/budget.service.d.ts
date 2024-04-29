import { Budget } from './entity/budget.interface';
import { BudgetORMEntity } from './entity/budget.entity';
import { Repository } from 'typeorm';
export declare class BudgetService {
    private readonly budgetRepository;
    constructor(budgetRepository: Repository<BudgetORMEntity>);
    readBudgets(): Promise<BudgetORMEntity[]>;
    createBudget(budgetData: Budget): Promise<BudgetORMEntity>;
    getBudgetById(id: string): Promise<BudgetORMEntity>;
    deleteBudget(id: string): Promise<void>;
}

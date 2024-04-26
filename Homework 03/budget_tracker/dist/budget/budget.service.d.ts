import { BudgetORMEntity } from './entity/budget.entity';
import { Repository } from 'typeorm';
export declare class BudgetService {
    private readonly budgetRepository;
    constructor(budgetRepository: Repository<BudgetORMEntity>);
}

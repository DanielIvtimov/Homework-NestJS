import { IncomeORMEntity } from '../entity/budget.entity';
import { Repository } from 'typeorm';
import { IncomeDTO } from '../budgetDto/budget.dto';
export declare class IncomesService {
    private readonly incomeRepository;
    constructor(incomeRepository: Repository<IncomeORMEntity>);
    createIncome(income: IncomeDTO): Promise<IncomeORMEntity>;
}

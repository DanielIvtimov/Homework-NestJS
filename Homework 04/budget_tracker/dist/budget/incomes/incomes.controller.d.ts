import { IncomesService } from './incomes.service';
import { IncomeDTO } from '../budgetDto/budget.dto';
import { IncomeORMEntity } from '../entity/budget.entity';
export declare class IncomesController {
    private readonly incomesService;
    constructor(incomesService: IncomesService);
    createIncome(incomeData: IncomeDTO): Promise<IncomeORMEntity>;
}

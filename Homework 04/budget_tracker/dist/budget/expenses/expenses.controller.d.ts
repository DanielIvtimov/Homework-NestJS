import { ExpensesService } from './expenses.service';
import { ExpenseDTO } from '../budgetDto/budget.dto';
import { ExpenseORMEntity } from '../entity/budget.entity';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    createExpenses(expensesData: ExpenseDTO): Promise<ExpenseORMEntity>;
}

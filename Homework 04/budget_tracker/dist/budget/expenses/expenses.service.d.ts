import { ExpenseORMEntity } from '../entity/budget.entity';
import { Repository } from 'typeorm';
import { ExpenseDTO } from '../budgetDto/budget.dto';
export declare class ExpensesService {
    private expenseRepository;
    constructor(expenseRepository: Repository<ExpenseORMEntity>);
    createExpenses(expense: ExpenseDTO): Promise<ExpenseORMEntity>;
}

import { ExpenseORMEntity } from '../entity/expenses.entity';
import { Repository } from 'typeorm';
import { ExpenseDTO } from '../budgetDto/budget.dto';
export declare class ExpensesService {
    private expenseRepository;
    constructor(expenseRepository: Repository<ExpenseORMEntity>);
    createExpense(expense: ExpenseDTO): Promise<ExpenseORMEntity>;
}

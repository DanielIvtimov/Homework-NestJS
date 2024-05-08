import { Body, Controller, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpenseDTO } from '../budgetDto/budget.dto';
import { ExpenseORMEntity } from '../entity/expenses.entity';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService){}

    @Post()
    async createExpenses(@Body() expensesData: ExpenseDTO): Promise<ExpenseORMEntity>{
        return await this.expensesService.createExpense(expensesData);
    }
}

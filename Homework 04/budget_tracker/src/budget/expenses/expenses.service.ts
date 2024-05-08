import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseORMEntity } from '../entity/budget.entity';
import { Repository } from 'typeorm';
import { ExpenseDTO } from '../budgetDto/budget.dto';

@Injectable()
export class ExpensesService {
    constructor(@InjectRepository(ExpenseORMEntity)private expenseRepository: Repository<ExpenseORMEntity>){}

    async createExpenses(expense:ExpenseDTO){
        const newExpense = {
            amount:expense.amount,
            description:expense.description,
            budgetId:expense.budgetId
        }
        const savedNewExpense = this.expenseRepository.create(newExpense)
        return this.expenseRepository.save(savedNewExpense);
        
    }
}
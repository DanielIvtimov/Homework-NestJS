import { Injectable, NotFoundException } from '@nestjs/common';
import { Budget, Currency} from './entity/budget.interface';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetORMEntity } from './entity/budget.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetService{
    constructor(@InjectRepository(BudgetORMEntity) private readonly budgetRepository: Repository<BudgetORMEntity>,){}

    
    // private budgets: Budget[] = [
    //     {
    //         id: '1',
    //         title: 'Month Budget',
    //         balance: 60000,
    //         currency: Currency.MKD,
    //         expenses: [],
    //         incomes: [],
    //     },
    //     {
    //         id: '2',
    //         title: 'Travel Budget',
    //         balance: 500,
    //         currency: Currency.USD,
    //         expenses: [],
    //         incomes: [],
    //     },
    // ];
    // constructor(){}
    // public readBudgets(): Budget[]{
    //     return this.budgets;
    // }

    // public createBudgets(budgetData: Budget): string {
    //     const newBudgetId = uuid();
    //     const newBudget: Budget = {
    //         id: newBudgetId,
    //         title: budgetData.title,
    //         balance: budgetData.balance,
    //         currency: budgetData.currency,
    //         expenses: [],
    //         incomes: [],
    //     };
    //     this.budgets.push(newBudget);
    //     return newBudgetId;
    // }

    // public getBudgetById(id: string): Budget {
    //     const budget = this.budgets.find(budget => budget.id === id);
    //     if(!budget){
    //         throw new NotFoundException(`Budget with that id ${id} is not found`);
    //     }
    //     return budget;
    // }

    // public deleteBudgetById(id: string): Budget {
    //     const budgetToDelete = this.budgets.find(budget => budget.id === id);
    //     if(!budgetToDelete){
    //         throw new NotFoundException(`Budget with id ${id} cannot be dekleted, it was not found.`);
    //     }
    //     this.budgets = this.budgets.filter(budget => budget.id !== id);
    //     return budgetToDelete;
    // }

    // public updateBudgetById(id: string, updateBudgetData: Budget): Budget {
    //     const budgetToUpdate = this.budgets.find(budget => budget.id === id);
    //     if(!budgetToUpdate){
    //         throw new NotFoundException(`Budget with id ${id} cannot be updated, it was not found,`)
    //     }
    //     budgetToUpdate.title = updateBudgetData.title || budgetToUpdate.title;
    //     budgetToUpdate.balance = updateBudgetData.balance || budgetToUpdate.balance;
    //     budgetToUpdate.currency = updateBudgetData.currency || budgetToUpdate.currency;
    //     return budgetToUpdate;
    // }
}
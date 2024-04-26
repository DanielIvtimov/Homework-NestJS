import { Injectable, NotFoundException } from "@nestjs/common";
import { Budget, Currency } from "./entity/budget.entityes";
import { v4 as uuid } from 'uuid';

@Injectable()
export class BudgetService{
    private budgets: Budget[] = [
        {
            id: '1',
            title: 'Month Budget',
            balance: 60000,
            currency: Currency.MKD,
            expenses: [],
            incomes: [],
        },
        {
            id: '2',
            title: 'Travel Budget',
            balance: 500,
            currency: Currency.USD,
            expenses: [],
            incomes: [],
        },
    ];
    constructor(){}
    public readBugets(): Budget[]{
        return this.budgets;
    }

    public createBudget(budgetData: Budget): string {
        const newBudgetId = uuid();
        const newBudget: Budget = {
            id: newBudgetId,
            title: budgetData.title,
            balance: budgetData.balance,
            currency: budgetData.currency,
            expenses: [],
            incomes: [],
        };
        this.budgets.push(newBudget);
        return newBudgetId;
    }

    public getBudgetById(id: string): Budget {
       const budget = this.budgets.find(budget => budget.id === id);
       if(!budget){
        throw new NotFoundException(`Not Found`);
       }
       return budget;
    }

    public deleteBudgetById(id: string): Budget {
        const budgetToDelete = this.budgets.find(budget => budget.id === id);
        if(!budgetToDelete){
            throw new NotFoundException(`Not Found`);
        }
        this.budgets = this.budgets.filter(budget => budget.id !== id);
        return budgetToDelete;
    }

    public updateBudgetById(id: string, updateData: Budget): Budget {
        const budgetToUpdate = this.budgets.find(budget => budget.id === id);
        if(!budgetToUpdate){
            throw new NotFoundException(`Not Found`);
        }
        budgetToUpdate.title = updateData.title || budgetToUpdate.title;
        budgetToUpdate.balance = updateData.balance || budgetToUpdate.balance
        budgetToUpdate.currency = updateData.currency || budgetToUpdate.currency;
        return budgetToUpdate;
    }
}

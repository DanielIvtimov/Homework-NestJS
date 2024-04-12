import { Injectable } from '@nestjs/common';

export interface Expense {
    id: string;
    amount: number;
    description: string;
}

export interface Income {
    id: string;
    amount: number;
    description: string;
}

export interface Budget {
    id: string;
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
}

export enum Currency {
    EUR = 'EUR',
    USD = 'USD',
    MKD = 'MKD'
}


@Injectable()
export class BudgetService{
    private budgets: Budget[] = [];
    constructor(){
        this.dataBudgets();
    }
    private dataBudgets(): void {
        const firstBudget: Budget = {
            id: "1",
            title: "Month Budget",
            balance: 60000,
            currency: Currency.MKD,
            expenses: [],
            incomes: []
        }
        const secondBudget: Budget = {
            id: "2",
            title: "Travel Budget",
            balance: 500,
            currency: Currency.USD,
            expenses: [],
            incomes: []
        };
        this.budgets.push(firstBudget, secondBudget);
    };
    public readBudgets(): Budget[] {
        return this.budgets;
    };  
} 

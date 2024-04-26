import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { Budget } from "./entity/budget.entityes";
import { BudgetDTO } from './budgetDto/budget.dto';

@Controller()
export class BudgetController {
    constructor(private readonly budgetService: BudgetService){}
    @Get('budget')
    listBudgets(): Budget[]{
        return this.budgetService.readBugets();
    }

    @Post('budget')
    createBudget(@Body() budgetDataFormat: BudgetDTO): string {
        const budget: Budget = {
            id: "",
            title: budgetDataFormat.title,
            balance: budgetDataFormat.balance,
            currency: budgetDataFormat.currency,
            expenses: [],
            incomes: [],
        };
        const budgetId = this.budgetService.createBudget(budget);
        return `Budget created successfully with ID: ${budgetId}`;
    }

    @Get('budget/:d')
    createBudgetById(@Param('id') id: string): Budget {
        const getBudget = this.budgetService.getBudgetById(id);
        return getBudget;
    }

    @Delete('budget/:id')
    deleteBudgetById(@Param('id') id: string): Budget {
        const deleteBudget = this.budgetService.deleteBudgetById(id);
        return deleteBudget;
    }

    @Put('budget/:id')
    updateBudgetById(@Param('id') id: string, @Body() updateBudgetData: BudgetDTO): Budget {
        const updatedBudget = this.budgetService.updateBudgetById(id, {
            id: id,
            title: updateBudgetData.title,
            balance: updateBudgetData.balance,
            currency: updateBudgetData.currency,
            expenses: [],
            incomes: []
        });
        return updatedBudget;
    }
}
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Budget } from './entity/budget.interface';
import { BudgetDTO, BudgetUpdateDTO } from './budgetDto/budget.dto';

@Controller()
export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}
    // @Get('budget')
    // listBudgets(): Budget[] {
    //     return this.budgetService.readBudgets();
    // }

    // @Post('budget')
    // createBudget(@Body() budgetDataFormat: BudgetDTO): string {
    //     const budget: Budget = {
    //         id: '',
    //         title: budgetDataFormat.title,
    //         balance: budgetDataFormat.balance,
    //         currency: budgetDataFormat.currency,
    //         expenses: [],
    //         incomes: [],
    //     };
    //     const budgetId = this.budgetService.createBudgets(budget);
    //     return `Budget created successfully with ID: ${budgetId}`;
    // }

    // @Get('budget/:id')
    // getBudgetById(@Param('id') id: string): Budget {
    //     const getBudget = this.budgetService.getBudgetById(id);
    //     return getBudget;
    // }

    // @Delete('budget/:id')
    // deleteBudgetById(@Param('id') id: string): Budget {
    //     const deletedBudget = this.budgetService.deleteBudgetById(id);
    //     return deletedBudget;
    // }

    // @Put('budget/:id')
    // updateBudgetById(@Param('id') id: string, @Body() updateBudgetData: BudgetUpdateDTO): Budget {
    //     const updatedBudget = this.budgetService.updateBudgetById(id, {
    //         id: id,
    //         title: updateBudgetData.title,
    //         balance: updateBudgetData.balance,
    //         currency: updateBudgetData.currency,
    //         expenses: [],
    //         incomes: []
    //     });
    //     return updatedBudget;
    // }
}

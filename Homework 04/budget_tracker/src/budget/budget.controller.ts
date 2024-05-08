import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetDTO } from './budgetDto/budget.dto';
import { BudgetORMEntity } from './entity/budget.entity';
import { AuthGuard } from './auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('budget')
export class BudgetController {
   constructor(private readonly budgetService: BudgetService){}
   
   @Get()
   async readBudgets(): Promise<BudgetORMEntity[]>{
    return await this.budgetService.readBudgets();
   }

   @Post()
   async createBudget(@Body() budgetData: BudgetDTO): Promise<BudgetORMEntity>{
    return await this.budgetService.createBudget(budgetData);
   }

   @Get(':id')
   async getBudgetById(@Param('id') id: string): Promise<BudgetORMEntity> {
      return await this.budgetService.getBudgetById(id);
   }

   @Delete(':id')
   async deleteBudget(@Param('id') id: string): Promise<void> {
        return await this.budgetService.deleteBudget(id);
   }
}





















// constructor(private readonly budgetService: BudgetService) {}
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
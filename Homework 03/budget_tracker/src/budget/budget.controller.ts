import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetDTO } from './budgetDto/budget.dto';
import { BudgetORMEntity } from './entity/budget.entity';

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
















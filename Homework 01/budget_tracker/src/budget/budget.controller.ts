import { Controller, Get } from '@nestjs/common';
import { BudgetService, Budget } from './budget.service';

@Controller()
export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}

    @Get('budget')
    listBudgets(): Budget[] {
        return this.budgetService.readBudgets();
    }
} 
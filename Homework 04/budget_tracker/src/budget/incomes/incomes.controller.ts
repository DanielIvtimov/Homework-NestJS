import { Controller, Post, Body } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { IncomeDTO } from '../budgetDto/budget.dto';
import { IncomeORMEntity } from '../entity/budget.entity';

@Controller('incomes')
export class IncomesController {
    constructor(private readonly incomesService: IncomesService){}

    @Post()
    async createIncome(@Body() incomeData: IncomeDTO): Promise<IncomeORMEntity>{
        return await this.incomesService.createIncome(incomeData);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomeORMEntity } from '../entity/budget.entity';
import { Repository } from 'typeorm';
import { IncomeDTO } from '../budgetDto/budget.dto';

@Injectable()
export class IncomesService {
    constructor(@InjectRepository(IncomeORMEntity) private readonly incomeRepository: Repository<IncomeORMEntity>){}

    async createIncome(income: IncomeDTO){
        const newIncome = {
            amount: income.amount,
            description: income.description,
            budgetId: income.budgetId
        };
        const savedNewIncome = this.incomeRepository.create(newIncome);
        return this.incomeRepository.save(savedNewIncome);
    }
}

import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetORMEntity, ExpenseORMEntity, IncomeORMEntity } from './entity/budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetORMEntity, ExpenseORMEntity, IncomeORMEntity])],
  providers: [BudgetService, BudgetORMEntity],
  controllers: [BudgetController],
})
export class BudgetModule {}

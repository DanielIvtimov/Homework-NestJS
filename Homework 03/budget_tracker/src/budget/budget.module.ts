import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetORMEntity, IncomeORMEntity } from './entity/budget.entity';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomesModule } from './incomes/incomes.module';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetORMEntity, IncomeORMEntity]), ExpensesModule, IncomesModule],
  providers: [BudgetService],
  controllers: [BudgetController],
})
export class BudgetModule {}

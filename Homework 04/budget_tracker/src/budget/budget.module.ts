import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetORMEntity, ExpenseORMEntity, IncomeORMEntity } from './entity/budget.entity';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomesModule } from './incomes/incomes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetORMEntity, ExpenseORMEntity, IncomeORMEntity]), ExpensesModule, IncomesModule, AuthModule, UsersModule],
  providers: [BudgetService],
  controllers: [BudgetController],
})
export class BudgetModule {}

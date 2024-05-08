import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseORMEntity } from '../entity/expenses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseORMEntity])],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule {}

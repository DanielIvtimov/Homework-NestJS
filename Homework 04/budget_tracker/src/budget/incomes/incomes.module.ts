import { Module } from '@nestjs/common';
import { IncomesController } from './incomes.controller';
import { IncomesService } from './incomes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeORMEntity } from '../entity/budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IncomeORMEntity])],
  controllers: [IncomesController],
  providers: [IncomesService]
})
export class IncomesModule {}

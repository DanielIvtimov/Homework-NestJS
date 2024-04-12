import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetModule } from './budget/budget.module';
import { BudgetService } from './budget/budget.service';
import { BudgetController } from './budget/budget.controller';

@Module({
  imports: [BudgetModule],
  controllers: [AppController, BudgetController],
  providers: [AppService, BudgetService],
})
export class AppModule {}
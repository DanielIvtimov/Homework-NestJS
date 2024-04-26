import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetModule } from './budget/budget.module';
import { BudgetService } from './budget/budget.service';
import { BudgetController } from './budget/budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BudgetModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'OurBudget',
    autoLoadEntities: true,
    // synchronize: true
  })],
  controllers: [AppController, BudgetController],
  providers: [AppService, BudgetService]
})
export class AppModule {}

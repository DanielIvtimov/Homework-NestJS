import { Currency } from "../entity/budget.interface";
import { IsString, IsNumber, IsEnum, IsOptional, ArrayNotEmpty, ValidateNested, } from 'class-validator';
import { Type } from 'class-transformer';

export class BudgetDTO {
    @IsString()
    title: string;

    @IsNumber()
    balance: number;

    @IsEnum(Currency)
    currency: Currency;

    @IsOptional()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => ExpenseDTO)
    expenses: ExpenseDTO[];

    @IsOptional()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => IncomeDTO)
    incomes: IncomeDTO[];
}

export class BudgetUpdateDTO {
    @IsString()
    @IsOptional()
    title?: string;

    @IsNumber()
    @IsOptional()
    balance?: number;

    @IsEnum(Currency)
    @IsOptional()
    currency?: Currency;
} 

export class ExpenseDTO {
    @IsString()
    id: string;

    @IsNumber()
    amount: number;

    @IsString()
    description: string;
}

export class IncomeDTO {
    @IsString()
    id: string;

    @IsNumber()
    amount: number;

    @IsString()
    description: string;
}

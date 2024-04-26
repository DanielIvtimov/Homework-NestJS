import { Currency } from "../entity/budget.entityes";
import { IsString, IsNumber, IsEnum } from "class-validator";

export class BudgetDTO {
    @IsString()
    title: string;

    @IsNumber()
    balance: number;

    @IsEnum(Currency)
    currency: Currency;
}
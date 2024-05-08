import { BudgetORMEntity } from "./budget.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn  } from "typeorm";

Entity({name: "our_expenses"})
export class ExpenseORMEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;

    @Column()
    description: string;

    @ManyToOne(() => BudgetORMEntity, budget => budget.expenses)
    @JoinColumn({name:"budgetId"})
    budget: BudgetORMEntity;

    @Column({
        nullable:true
    })
    budgetId:string
}
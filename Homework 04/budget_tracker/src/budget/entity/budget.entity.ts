import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity({name: "our_budget"})
export class BudgetORMEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    balance: number;

    @Column()
    currency: string;

    @OneToMany(() => ExpenseORMEntity, expense => expense.budget)
    expenses: ExpenseORMEntity[];

    @OneToMany(() => IncomeORMEntity, income => income.budget)
    incomes: IncomeORMEntity[];
}

@Entity({name: "our_expenses"})
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

@Entity({name: "our_incomes"})
export class IncomeORMEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;

    @Column()
    description: string;

    @ManyToOne(() => BudgetORMEntity, budget => budget.incomes)
    @JoinColumn({name:"budgetId"})
    budget: BudgetORMEntity;

    @Column({
        nullable:true
    })
    budgetId:string
}
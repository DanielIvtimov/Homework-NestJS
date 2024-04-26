"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const budget_entityes_1 = require("./entity/budget.entityes");
const uuid_1 = require("uuid");
let BudgetService = class BudgetService {
    constructor() {
        this.budgets = [
            {
                id: '1',
                title: 'Month Budget',
                balance: 60000,
                currency: budget_entityes_1.Currency.MKD,
                expenses: [],
                incomes: [],
            },
            {
                id: '2',
                title: 'Travel Budget',
                balance: 500,
                currency: budget_entityes_1.Currency.USD,
                expenses: [],
                incomes: [],
            },
        ];
    }
    readBugets() {
        return this.budgets;
    }
    createBudget(budgetData) {
        const newBudgetId = (0, uuid_1.v4)();
        const newBudget = {
            id: newBudgetId,
            title: budgetData.title,
            balance: budgetData.balance,
            currency: budgetData.currency,
            expenses: [],
            incomes: [],
        };
        this.budgets.push(newBudget);
        return newBudgetId;
    }
    getBudgetById(id) {
        const budget = this.budgets.find(budget => budget.id === id);
        if (!budget) {
            throw new common_1.NotFoundException(`Not Found`);
        }
        return budget;
    }
    deleteBudgetById(id) {
        const budgetToDelete = this.budgets.find(budget => budget.id === id);
        if (!budgetToDelete) {
            throw new common_1.NotFoundException(`Not Found`);
        }
        this.budgets = this.budgets.filter(budget => budget.id !== id);
        return budgetToDelete;
    }
    updateBudgetById(id, updateData) {
        const budgetToUpdate = this.budgets.find(budget => budget.id === id);
        if (!budgetToUpdate) {
            throw new common_1.NotFoundException(`Not Found`);
        }
        budgetToUpdate.title = updateData.title || budgetToUpdate.title;
        budgetToUpdate.balance = updateData.balance || budgetToUpdate.balance;
        budgetToUpdate.currency = updateData.currency || budgetToUpdate.currency;
        return budgetToUpdate;
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BudgetService);
//# sourceMappingURL=budget.service.js.map
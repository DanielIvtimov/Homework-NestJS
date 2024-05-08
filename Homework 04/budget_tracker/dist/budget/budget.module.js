"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetModule = void 0;
const common_1 = require("@nestjs/common");
const budget_service_1 = require("./budget.service");
const budget_controller_1 = require("./budget.controller");
const typeorm_1 = require("@nestjs/typeorm");
const budget_entity_1 = require("./entity/budget.entity");
const expenses_module_1 = require("./expenses/expenses.module");
const incomes_module_1 = require("./incomes/incomes.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
let BudgetModule = class BudgetModule {
};
exports.BudgetModule = BudgetModule;
exports.BudgetModule = BudgetModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([budget_entity_1.BudgetORMEntity, budget_entity_1.ExpenseORMEntity, budget_entity_1.IncomeORMEntity]), expenses_module_1.ExpensesModule, incomes_module_1.IncomesModule, auth_module_1.AuthModule, users_module_1.UsersModule],
        providers: [budget_service_1.BudgetService],
        controllers: [budget_controller_1.BudgetController],
    })
], BudgetModule);
//# sourceMappingURL=budget.module.js.map
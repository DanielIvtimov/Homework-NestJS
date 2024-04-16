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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetController = void 0;
const common_1 = require("@nestjs/common");
const budget_service_1 = require("./budget.service");
const budget_dto_1 = require("./budgetDto/budget.dto");
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    listBudgets() {
        return this.budgetService.readBudgets();
    }
    createBudget(budgetDataFormat) {
        const budget = {
            id: '',
            title: budgetDataFormat.title,
            balance: budgetDataFormat.balance,
            currency: budgetDataFormat.currency,
            expenses: [],
            incomes: [],
        };
        const budgetId = this.budgetService.createBudgets(budget);
        return `Budget created successfully with ID: ${budgetId}`;
    }
    getBudgetById(id) {
        const getBudget = this.budgetService.getBudgetById(id);
        return getBudget;
    }
    deleteBudgetById(id) {
        const deletedBudget = this.budgetService.deleteBudgetById(id);
        return deletedBudget;
    }
    updateBudgetById(id, updateBudgetData) {
        const updatedBudget = this.budgetService.updateBudgetById(id, {
            id: id,
            title: updateBudgetData.title,
            balance: updateBudgetData.balance,
            currency: updateBudgetData.currency,
            expenses: [],
            incomes: []
        });
        return updatedBudget;
    }
};
exports.BudgetController = BudgetController;
__decorate([
    (0, common_1.Get)('budget'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], BudgetController.prototype, "listBudgets", null);
__decorate([
    (0, common_1.Post)('budget'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [budget_dto_1.BudgetDTO]),
    __metadata("design:returntype", String)
], BudgetController.prototype, "createBudget", null);
__decorate([
    (0, common_1.Get)('budget/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BudgetController.prototype, "getBudgetById", null);
__decorate([
    (0, common_1.Delete)('budget/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BudgetController.prototype, "deleteBudgetById", null);
__decorate([
    (0, common_1.Put)('budget/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, budget_dto_1.BudgetDTO]),
    __metadata("design:returntype", Object)
], BudgetController.prototype, "updateBudgetById", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [budget_service_1.BudgetService])
], BudgetController);
//# sourceMappingURL=budget.controller.js.map
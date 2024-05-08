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
exports.ExpenseORMEntity = void 0;
const budget_entity_1 = require("./budget.entity");
const typeorm_1 = require("typeorm");
(0, typeorm_1.Entity)({ name: "our_expenses" });
class ExpenseORMEntity {
}
exports.ExpenseORMEntity = ExpenseORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ExpenseORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExpenseORMEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExpenseORMEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => budget_entity_1.BudgetORMEntity, budget => budget.expenses),
    (0, typeorm_1.JoinColumn)({ name: "budgetId" }),
    __metadata("design:type", budget_entity_1.BudgetORMEntity)
], ExpenseORMEntity.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], ExpenseORMEntity.prototype, "budgetId", void 0);
//# sourceMappingURL=expenses.entity.js.map
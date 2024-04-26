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
exports.IncomeDTO = exports.ExpenseDTO = exports.BudgetUpdateDTO = exports.BudgetDTO = void 0;
const budget_interface_1 = require("../entity/budget.interface");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class BudgetDTO {
}
exports.BudgetDTO = BudgetDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BudgetDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BudgetDTO.prototype, "balance", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(budget_interface_1.Currency),
    __metadata("design:type", String)
], BudgetDTO.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExpenseDTO),
    __metadata("design:type", Array)
], BudgetDTO.prototype, "expenses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => IncomeDTO),
    __metadata("design:type", Array)
], BudgetDTO.prototype, "incomes", void 0);
class BudgetUpdateDTO {
}
exports.BudgetUpdateDTO = BudgetUpdateDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BudgetUpdateDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BudgetUpdateDTO.prototype, "balance", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(budget_interface_1.Currency),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BudgetUpdateDTO.prototype, "currency", void 0);
class ExpenseDTO {
}
exports.ExpenseDTO = ExpenseDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExpenseDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExpenseDTO.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExpenseDTO.prototype, "description", void 0);
class IncomeDTO {
}
exports.IncomeDTO = IncomeDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IncomeDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IncomeDTO.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IncomeDTO.prototype, "description", void 0);
//# sourceMappingURL=budget.dto.js.map
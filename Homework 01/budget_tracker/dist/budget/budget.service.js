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
exports.BudgetService = exports.Currency = void 0;
const common_1 = require("@nestjs/common");
var Currency;
(function (Currency) {
    Currency["EUR"] = "EUR";
    Currency["USD"] = "USD";
    Currency["MKD"] = "MKD";
})(Currency || (exports.Currency = Currency = {}));
let BudgetService = class BudgetService {
    constructor() {
        this.budgets = [];
        this.dataBudgets();
    }
    dataBudgets() {
        const firstBudget = {
            id: "1",
            title: "Month Budget",
            balance: 60000,
            currency: Currency.MKD,
            expenses: [],
            incomes: []
        };
        const secondBudget = {
            id: "2",
            title: "Travel Budget",
            balance: 500,
            currency: Currency.USD,
            expenses: [],
            incomes: []
        };
        this.budgets.push(firstBudget, secondBudget);
    }
    ;
    readBudgets() {
        return this.budgets;
    }
    ;
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BudgetService);
//# sourceMappingURL=budget.service.js.map
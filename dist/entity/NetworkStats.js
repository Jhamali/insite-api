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
const typeorm_1 = require("typeorm");
let NetworkStat = class NetworkStat extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], NetworkStat.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], NetworkStat.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], NetworkStat.prototype, "operstate", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], NetworkStat.prototype, "rx", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], NetworkStat.prototype, "tx", void 0);
__decorate([
    typeorm_1.Column('double'),
    __metadata("design:type", Number)
], NetworkStat.prototype, "rx_sec", void 0);
__decorate([
    typeorm_1.Column('double'),
    __metadata("design:type", Number)
], NetworkStat.prototype, "tx_sec", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NetworkStat.prototype, "ms", void 0);
NetworkStat = __decorate([
    typeorm_1.Entity('networkstat')
], NetworkStat);
exports.default = NetworkStat;
//# sourceMappingURL=NetworkStats.js.map
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
let CpuSpeed = class CpuSpeed extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CpuSpeed.prototype, "datapoint_id", void 0);
__decorate([
    typeorm_1.Column('uuid'),
    __metadata("design:type", String)
], CpuSpeed.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], CpuSpeed.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CpuSpeed.prototype, "min", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CpuSpeed.prototype, "max", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CpuSpeed.prototype, "avg", void 0);
CpuSpeed = __decorate([
    typeorm_1.Entity('cpuspeed')
], CpuSpeed);
exports.default = CpuSpeed;
//# sourceMappingURL=CpuSpeed.js.map
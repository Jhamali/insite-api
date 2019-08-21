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
let CPU = class CPU extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], CPU.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], CPU.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "manufacturer", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "brand", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "vendor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "family", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "model", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "stepping", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "revision", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "voltage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "speed", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "speedmin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CPU.prototype, "speedmax", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CPU.prototype, "cores", void 0);
__decorate([
    typeorm_1.Column('longtext'),
    __metadata("design:type", String)
], CPU.prototype, "flags", void 0);
CPU = __decorate([
    typeorm_1.Entity('cpu')
], CPU);
exports.default = CPU;
//# sourceMappingURL=CPU.js.map
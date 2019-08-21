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
let Baseboard = class Baseboard extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], Baseboard.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Baseboard.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Baseboard.prototype, "manufacturer", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Baseboard.prototype, "model", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Baseboard.prototype, "version", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Baseboard.prototype, "serial", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Baseboard.prototype, "assetTag", void 0);
Baseboard = __decorate([
    typeorm_1.Entity('baseboard')
], Baseboard);
exports.default = Baseboard;
//# sourceMappingURL=Baseboard.js.map
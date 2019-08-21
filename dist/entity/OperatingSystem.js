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
let OperatingSystem = class OperatingSystem extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], OperatingSystem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], OperatingSystem.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OperatingSystem.prototype, "platform", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OperatingSystem.prototype, "distro", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OperatingSystem.prototype, "release", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OperatingSystem.prototype, "codename", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OperatingSystem.prototype, "kernel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OperatingSystem.prototype, "arch", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OperatingSystem.prototype, "hostname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OperatingSystem.prototype, "logofile", void 0);
OperatingSystem = __decorate([
    typeorm_1.Entity('operatingsystem')
], OperatingSystem);
exports.default = OperatingSystem;
//# sourceMappingURL=OperatingSystem.js.map
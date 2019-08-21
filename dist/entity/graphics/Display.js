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
let Display = class Display extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Display.prototype, "datapoint_id", void 0);
__decorate([
    typeorm_1.Column('uuid'),
    __metadata("design:type", String)
], Display.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Display.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Display.prototype, "connection", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Display.prototype, "main", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Display.prototype, "builtin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Display.prototype, "model", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Display.prototype, "resolutionx", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Display.prototype, "resolutiony", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Display.prototype, "sizex", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Display.prototype, "sizey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Display.prototype, "pixeldepth", void 0);
Display = __decorate([
    typeorm_1.Entity('display')
], Display);
exports.default = Display;
//# sourceMappingURL=Display.js.map
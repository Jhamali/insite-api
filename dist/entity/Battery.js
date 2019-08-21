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
let Battery = class Battery extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], Battery.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Battery.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column('tinyint'),
    __metadata("design:type", Boolean)
], Battery.prototype, "hasbattery", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Battery.prototype, "cyclecount", void 0);
__decorate([
    typeorm_1.Column('tinyint'),
    __metadata("design:type", Boolean)
], Battery.prototype, "ischarging", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Battery.prototype, "maxcapacity", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Battery.prototype, "currentcapacity", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Battery.prototype, "percent", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Battery.prototype, "timeremaining", void 0);
__decorate([
    typeorm_1.Column('tinyint', {
        default: false,
    }),
    __metadata("design:type", Boolean)
], Battery.prototype, "aconnected", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Battery.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Battery.prototype, "model", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Battery.prototype, "manufacturer", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Battery.prototype, "serial", void 0);
Battery = __decorate([
    typeorm_1.Entity('battery')
], Battery);
exports.default = Battery;
//# sourceMappingURL=Battery.js.map
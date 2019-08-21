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
let Process = class Process extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Process.prototype, "datapoint_id", void 0);
__decorate([
    typeorm_1.Column('uuid'),
    __metadata("design:type", String)
], Process.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Process.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Process.prototype, "pid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Process.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Process.prototype, "pcpu", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Process.prototype, "pcpuu", void 0);
__decorate([
    typeorm_1.Column('double'),
    __metadata("design:type", Number)
], Process.prototype, "pcpus", void 0);
__decorate([
    typeorm_1.Column('double'),
    __metadata("design:type", Number)
], Process.prototype, "pmem", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Process.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Process.prototype, "mem_vsz", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Process.prototype, "mem_rss", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Process.prototype, "nice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Process.prototype, "started", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Process.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Process.prototype, "tty", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Process.prototype, "user", void 0);
__decorate([
    typeorm_1.Column('longtext'),
    __metadata("design:type", String)
], Process.prototype, "command", void 0);
Process = __decorate([
    typeorm_1.Entity('process')
], Process);
exports.default = Process;
//# sourceMappingURL=Process.js.map
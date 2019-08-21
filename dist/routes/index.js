"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Memory_1 = __importDefault(require("../entity/Memory"));
const Client_1 = __importDefault(require("../entity/Client"));
const User_1 = __importDefault(require("../entity/User"));
const Battery_1 = __importDefault(require("../entity/Battery"));
const OperatingSystem_1 = __importDefault(require("../entity/OperatingSystem"));
const Time_1 = __importDefault(require("../entity/Time"));
const System_1 = __importDefault(require("../entity/System"));
const Bios_1 = __importDefault(require("../entity/Bios"));
const FileSystem_1 = __importDefault(require("../entity/FileSystem"));
const Baseboard_1 = __importDefault(require("../entity/Baseboard"));
const CPU_1 = __importDefault(require("../entity/CPU"));
const Controller_1 = __importDefault(require("../entity/graphics/Controller"));
const Display_1 = __importDefault(require("../entity/graphics/Display"));
const Network_1 = require("../entity/Network");
const CpuSpeed_1 = __importDefault(require("../entity/CpuSpeed"));
const CurrentLoad_1 = __importDefault(require("../entity/CurrentLoad"));
const NetworkConnection_1 = __importDefault(require("../entity/NetworkConnection"));
const NetworkStats_1 = __importDefault(require("../entity/NetworkStats"));
const Process_1 = __importDefault(require("../entity/Process"));
const app = express_1.Router();
app.post('/post', (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.body)
        return res.end();
    const { timestamp } = req.body;
    const { id } = req.body;
    const client = Client_1.default.create({
        id,
        lastTimestamp: timestamp,
    });
    yield client.save();
    const { system } = req.body;
    yield System_1.default.create(Object.assign({ id,
        timestamp }, system)).save();
    const { bios } = req.body;
    yield Bios_1.default.create(Object.assign({ id,
        timestamp }, bios)).save();
    const { baseboard } = req.body;
    yield Baseboard_1.default.create(Object.assign({ id,
        timestamp }, baseboard)).save();
    const { os } = req.body;
    yield OperatingSystem_1.default.create(Object.assign({ id,
        timestamp }, os)).save();
    const { cpu } = req.body;
    yield CPU_1.default.create(Object.assign({ id,
        timestamp }, cpu)).save();
    const { controllers, displays } = req.body.graphics;
    controllers.map((controller) => __awaiter(this, void 0, void 0, function* () {
        return yield Controller_1.default.create(Object.assign({ id,
            timestamp }, controller)).save();
    }));
    displays.map((display) => __awaiter(this, void 0, void 0, function* () {
        return yield Display_1.default.create(Object.assign({ id,
            timestamp }, display)).save();
    }));
    const { net: networkInterfaces } = req.body;
    networkInterfaces.map((net) => __awaiter(this, void 0, void 0, function* () {
        return yield Network_1.Network.create(Object.assign({ id,
            timestamp }, net)).save();
    }));
    const { time } = req.body;
    yield Time_1.default.create(Object.assign({ id,
        timestamp }, time)).save();
    const { cpuCurrentspeed: cpuSpeed } = req.body;
    yield CpuSpeed_1.default.create(Object.assign({ id,
        timestamp }, cpuSpeed)).save();
    const { currentLoad: cpuLoad } = req.body;
    yield CurrentLoad_1.default.create(Object.assign({ id,
        timestamp }, cpuLoad)).save();
    const { fsSize: filesystems } = req.body;
    filesystems.map((filesystem) => __awaiter(this, void 0, void 0, function* () {
        return yield FileSystem_1.default.create(Object.assign({ id,
            timestamp }, filesystem)).save();
    }));
    const memory = req.body.mem;
    yield Memory_1.default.create(Object.assign({}, memory, { timestamp, id })).save();
    const { networkConnections } = req.body;
    networkConnections.map((connection) => __awaiter(this, void 0, void 0, function* () {
        return yield NetworkConnection_1.default.create(Object.assign({ id,
            timestamp }, connection)).save();
    }));
    const { networkStats } = req.body;
    yield NetworkStats_1.default.create(Object.assign({ id,
        timestamp }, networkStats)).save();
    const users = req.body.users;
    users.map((user) => __awaiter(this, void 0, void 0, function* () {
        return yield User_1.default.create(Object.assign({}, user, { id,
            timestamp })).save();
    }));
    if (!req.body.processes) {
        res.end();
    }
    else {
        const { list: processes } = req.body.processes;
        processes.map((process) => __awaiter(this, void 0, void 0, function* () {
            return yield Process_1.default.create(Object.assign({ id,
                timestamp }, process)).save();
        }));
    }
    const battery = req.body.battery;
    yield Battery_1.default.create(Object.assign({ id,
        timestamp }, battery)).save();
    res.end();
}));
exports.default = app;
//# sourceMappingURL=index.js.map
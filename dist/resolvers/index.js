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
const Battery_1 = __importDefault(require("../entity/Battery"));
const OperatingSystem_1 = __importDefault(require("../entity/OperatingSystem"));
const Client_1 = __importDefault(require("../entity/Client"));
const CPU_1 = __importDefault(require("../entity/CPU"));
const System_1 = __importDefault(require("../entity/System"));
const Bios_1 = __importDefault(require("../entity/Bios"));
const FileSystem_1 = __importDefault(require("../entity/FileSystem"));
const Baseboard_1 = __importDefault(require("../entity/Baseboard"));
const Display_1 = __importDefault(require("../entity/graphics/Display"));
const Controller_1 = __importDefault(require("../entity/graphics/Controller"));
const Network_1 = require("../entity/Network");
const User_1 = __importDefault(require("../entity/User"));
const Process_1 = __importDefault(require("../entity/Process"));
const Time_1 = __importDefault(require("../entity/Time"));
const CpuSpeed_1 = __importDefault(require("../entity/CpuSpeed"));
const CurrentLoad_1 = __importDefault(require("../entity/CurrentLoad"));
const Memory_1 = __importDefault(require("../entity/Memory"));
const resolvers = {
    Query: {
        getAllClients() {
            return __awaiter(this, void 0, void 0, function* () {
                let clients = yield Client_1.default.find();
                if (!clients)
                    return null;
                return clients;
            });
        },
        getAllData(_, { id }) {
            return { id };
        },
    },
    Payload: {
        system(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let system = yield System_1.default.findOne({ where: { id } });
                if (!system)
                    return null;
                return system;
            });
        },
        bios(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let bios = yield Bios_1.default.findOne({ where: { id } });
                if (!bios)
                    return null;
                return bios;
            });
        },
        baseboard(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let baseboard = yield Baseboard_1.default.findOne({ where: { id } });
                if (!baseboard)
                    return null;
                return baseboard;
            });
        },
        os(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let os = yield OperatingSystem_1.default.findOne({ where: { id } });
                if (!os)
                    return null;
                return os;
            });
        },
        cpu(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let cpu = yield CPU_1.default.findOne({ where: { id } });
                if (!cpu)
                    return null;
                return cpu;
            });
        },
        displays(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let display = yield Display_1.default.find({ where: { id } });
                if (!display)
                    return null;
                return display;
            });
        },
        controllers(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let controller = yield Controller_1.default.find({ where: { id } });
                if (!controller)
                    return null;
                return controller;
            });
        },
        networkInterfaces(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let networkInterfaces = yield Network_1.Network.find({ where: { id } });
                if (!networkInterfaces)
                    return null;
                return networkInterfaces;
            });
        },
        time(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let time = yield Time_1.default.findOne({ where: { id } });
                if (!time)
                    return null;
                return time;
            });
        },
        cpuSpeed(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let cpuSpeeds = yield CpuSpeed_1.default.find({ where: { id } });
                if (!cpuSpeeds)
                    return null;
                return cpuSpeeds;
            });
        },
        cpuLoad(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let cpuLoads = yield CurrentLoad_1.default.find({ where: { id } });
                if (!cpuLoads)
                    return null;
                return cpuLoads;
            });
        },
        users(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let users = yield User_1.default.find({ where: { id } });
                if (!users)
                    return null;
                return users;
            });
        },
        fs(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let fs = yield FileSystem_1.default.find({ where: { id } });
                if (!fs)
                    return null;
                return fs;
            });
        },
        memory(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                console.log(id);
                let memory = yield Memory_1.default.findOne({
                    where: { id },
                    order: {
                        timestamp: 'DESC',
                    },
                });
                if (!memory)
                    return null;
                return memory;
            });
        },
        battery(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let battery = yield Battery_1.default.findOne({ where: { id } });
                if (!battery)
                    return null;
                return battery;
            });
        },
        processes(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id } = parent;
                let processes = yield Process_1.default.find({ where: { id } });
                if (!processes)
                    return null;
                return processes;
            });
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map
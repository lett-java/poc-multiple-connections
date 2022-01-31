"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDbTWo = exports.connectionDbOne = void 0;
const typeorm_1 = require("typeorm");
exports.connectionDbOne = (0, typeorm_1.createConnection)("first-connection");
exports.connectionDbTWo = (0, typeorm_1.createConnection)("second-connection");

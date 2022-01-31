"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDbTWo = exports.connectionDbOne = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const typeorm_1 = require("typeorm");
const app = (0, express_1.default)();
exports.connectionDbOne = (0, typeorm_1.createConnection)("first-connection");
exports.connectionDbTWo = (0, typeorm_1.createConnection)("second-connection");
// middlewares
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// routes
app.use(user_routes_1.default);
app.use(product_routes_1.default);
app.listen(3000);
console.log('Server on port: ', 3000);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
//Middlewares
app.use((0, morgan_1.default)('dev')); // Lee peticiones HTTP
app.use((0, cors_1.default)()); // Permite el acceso desde otros clientes
app.use(express_1.default.json()); //Leer json
app.use(user_routes_1.default);
exports.default = app;

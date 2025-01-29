"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDatabase = void 0;
const typeorm_1 = require("typeorm");
exports.myDatabase = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "arkus@123",
    database: "ormdb",
    entities: [],
    logging: true,
    synchronize: true,
});

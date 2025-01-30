"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDatabase = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
exports.myDatabase = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "arkus@123",
    database: "ormdb",
    entities: [user_entity_1.User],
    logging: true,
    synchronize: true,
});

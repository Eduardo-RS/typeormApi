import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";

export const myDatabase = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "arkus@123",
  database: "ormdb",
  entities: [User],
  logging: true,
  synchronize: true,
});
import { ConnectionOptions } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const configConnection: ConnectionOptions = {
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

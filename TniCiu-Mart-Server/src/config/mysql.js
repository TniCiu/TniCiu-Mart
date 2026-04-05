import { env } from "./environment";
import mysql from "mysql2/promise";

let connection = null;

export const CONNECT_DB = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: env.DB_HOST,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    });
  }

  return connection;
};

export const CLOSE_DB = async () => {
  if (connection) {
    await connection.end();
    connection = null;
  }
};
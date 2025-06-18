import express from "express";
import { env } from "./config/environment";
import { CONNECT_DB, CLOSE_DB } from "./config/mysql";
import exitHook from "async-exit-hook";
import { APIs_V1 } from "./routes/v1";

const START_SERVER = () => {
  const app = express();

  app.use(`/${env.VERSION}`, APIs_V1);

  app.listen(env.APP_PORT, env.APP_HOST,() => {
    console.log(`3. Server running at http://${env.APP_HOST}:${env.APP_PORT}`);
  });

  exitHook(() => {
    console.log("4. Disconnecting from Database with Mysql...");
    CLOSE_DB();
    console.log("5. Disconnected from Database with Mysql! ");
  });
};

(async () => {
  try {
    console.log("1. connecting from Database with Mysql...");
    CONNECT_DB();
    console.log("2. connected to mysql with Mysql2/Promise succsessfully!");
    START_SERVER();
  } catch (error) {
    console.error("Error connecting to Mysql: ", error);
    process.exit(0);
  }
})();

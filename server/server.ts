import { app } from "./app";
import "dotenv/config";
import { cleanEnv, port } from "envalid";

const env = cleanEnv(process.env, {
  PORT: port(),
});

// create server
app.listen(env.PORT, () => {
  console.log("app listening on port " + env.PORT + "...\n");
});

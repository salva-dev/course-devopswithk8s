import { Context, Hono } from "hono";
import { parseArgs } from "@std/cli/parse-args";


const defaultAppPort = 8888;
const cliArgs = parseArgs(Deno.args, {
  string: ["port"],
  default: { port: defaultAppPort }
});

const cliArgPort = Number(cliArgs.port) ? Number(cliArgs.port) : defaultAppPort;

const app = new Hono();

app.get("/", (c: Context) =>
  c.json({
    ok: true,
    message: "Hello Hono!",
  }));

console.log(`Server started in port ${cliArgPort}`);
Deno.serve({ port: cliArgPort }, app.fetch);

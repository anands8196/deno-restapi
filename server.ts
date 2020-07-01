import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
const defaultPort: number = 8000;

const { args, exit } = Deno;
const app = new Application();
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : defaultPort;

import router from "./router.ts";

app.use(router.routes());
app.use(router.allowedMethods());

console.log("server is started on port http://localhost:8000");
await app.listen({ port });

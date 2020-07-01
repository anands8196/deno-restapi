import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const port: number = 8000;

import router from "./router.ts";

app.use(router.routes());
app.use(router.allowedMethods());

console.log("server is started on port http://localhost:8000");
await app.listen({ port });

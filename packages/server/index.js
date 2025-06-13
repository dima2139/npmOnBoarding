// @ts-check

import Koa from "koa";
import Router from "@koa/router";
import pino from "pino";

const PORT = process.env.PORT || 3000;

const log = pino();

const app = new Koa();
const router = new Router();

app.use(router.routes());

app.listen(PORT, () => {
  log.info(`Listening on port :${PORT}`);
});

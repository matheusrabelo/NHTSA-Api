import koaRouter from 'koa-router';

import * as healthcheckHandler from './handlers/healthcheck';

const router = koaRouter();

router.get('/healthcheck', healthcheckHandler.getHealthcheck);

export default router;

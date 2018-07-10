import koaRouter from 'koa-router';

import * as healthcheckHandler from './handlers/healthcheck';
import * as vehiclesHandler from './handlers/vehicles';

const router = koaRouter();

router.get('/healthcheck', healthcheckHandler.getHealthcheck);
router.get('/vehicles/:modelYear/:manufacturer/:model', vehiclesHandler.getVehicles);

export default router;

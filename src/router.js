import koaRouter from 'koa-router';

import validate from './utils/validate';
import vehicleSchema from './schemas/vehicle';
import { addRatings } from './middlewares/ratings';
import * as healthcheckHandler from './handlers/healthcheck';
import * as vehiclesHandler from './handlers/vehicles';

const router = koaRouter();

router.get('/healthcheck', healthcheckHandler.getHealthcheck);
router.get('/vehicles/:modelYear/:manufacturer/:model', addRatings, vehiclesHandler.getVehicles);
router.post('/vehicles', validate(vehicleSchema), addRatings, vehiclesHandler.postVehicles);

export default router;

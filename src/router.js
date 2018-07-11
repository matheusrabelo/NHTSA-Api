import koaRouter from 'koa-router';

import validate from './utils/validate';
import * as vehicleSchemas from './schemas/vehicle';
import { addRatings } from './middlewares/ratings';
import * as healthcheckHandler from './handlers/healthcheck';
import * as vehiclesHandler from './handlers/vehicles';

const router = koaRouter();

router.get('/healthcheck', healthcheckHandler.getHealthcheck);

router.get(
    '/vehicles/:modelYear/:manufacturer/:model',
    validate({ schema: vehicleSchemas.getVehicles }),
    addRatings,
    vehiclesHandler.getVehicles,
);

router.post(
    '/vehicles',
    validate({ schema: vehicleSchemas.postVehicles }),
    addRatings,
    vehiclesHandler.postVehicles,
);

export default router;

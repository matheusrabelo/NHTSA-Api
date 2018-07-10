import * as vehiclesService from '../services/vehicles';

export default async (ctx, next) => {
    ctx.state = {
        vehiclesService,
    };
    await next();
};

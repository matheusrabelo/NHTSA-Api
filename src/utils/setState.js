import * as vehiclesService from '../services/vehicles';
import * as ratingsService from '../services/ratings';

export default async (ctx, next) => {
    ctx.state = {
        ratingsService,
        vehiclesService,
    };
    await next();
};

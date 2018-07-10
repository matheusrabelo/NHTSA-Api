import status from 'http-status';
import logger from '../libs/logger';

export const getVehicles = async (ctx) => {
    try {
        const { modelYear, manufacturer, model } = ctx.params;
        const vehicles = await ctx.state.vehiclesService
            .getVehicles({ modelYear, manufacturer, model });
        ctx.status = status.OK;
        ctx.body = vehicles;
    } catch (err) {
        ctx.status = status.INTERNAL_SERVER_ERROR;
        logger.log('Get vehicles handler error', { err: err.message });
    }
};

export const postVehicles = async (ctx) => {
    try {
        const { modelYear, manufacturer, model } = ctx.request.body;
        const vehicles = await ctx.state.vehiclesService
            .postVehicles({ modelYear, manufacturer, model });
        ctx.status = status.CREATED;
        ctx.body = vehicles;
    } catch (err) {
        ctx.status = status.INTERNAL_SERVER_ERROR;
        logger.log('Post vehicle handler error', { err: err.message });
    }
};

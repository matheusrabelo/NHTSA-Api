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
        logger.log('Get vehicle handler error', { err: err.message });
    }
};

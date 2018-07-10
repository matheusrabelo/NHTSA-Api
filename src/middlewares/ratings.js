import lodash from 'lodash';
import logger from '../libs/logger';

const addRatingToVehicle = async ({ Result, ctx }) => {
    const { getCrashRating } = ctx.state.ratingsService;
    Object.assign(Result, {
        CrashRating: await getCrashRating({ vehicleId: Result.VehicleId }),
    });
};

const addRatingsToResults = async ({ Results, ctx }) => {
    const promises = Results.map(Result => addRatingToVehicle({ Result, ctx }));
    await Promise.all(promises);
};

export const addRatings = async (ctx, next) => {
    try {
        await next();
        const { withRating } = ctx.query;
        const Results = lodash.get(ctx, 'body.Results');
        if (withRating === 'true' && Array.isArray(Results)) {
            await addRatingsToResults({ Results, ctx });
        }
    } catch (err) {
        logger.log('Get ratings middleware error', { err: err.message });
    }
};

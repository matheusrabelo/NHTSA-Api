import axios from 'axios';
import lodash from 'lodash';
import logger from '../libs/logger';

const nhtsaApi = process.env.NHTSA_API || 'https://one.nhtsa.gov/webapi/api';

export const getVehicles = async ({ modelYear, manufacturer, model }) => {
    const url = `${nhtsaApi}/SafetyRatings/modelyear/${modelYear}/make/${manufacturer}/model/${model}?format=json`;
    try {
        logger.log('Getting vehicles', url);
        const response = await axios.get(url);
        const results = lodash.get(response, 'data.Results');
        if (Array.isArray(results)) {
            return {
                Count: results.length,
                Results: results.map(result => ({
                    Description: result.VehicleDescription,
                    VehicleId: result.VehicleId,
                })),
            };
        }
        return {
            Count: 0,
            Results: [],
        };
    } catch (err) {
        logger.log('Error while trying to get vehicles from NHTSA', { err: err.message });
        throw new Error('Get vehicles error');
    }
};

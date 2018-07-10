import axios from 'axios';
import lodash from 'lodash';
import logger from '../libs/logger';

const nhtsaApi = process.env.NHTSA_API || 'https://one.nhtsa.gov/webapi/api';

export const getCrashRating = async ({ vehicleId }) => {
    const url = `${nhtsaApi}/SafetyRatings/VehicleId/${vehicleId}?format=json`;
    try {
        logger.log('Getting vehicle rating', url);
        const response = await axios.get(url);
        const result = lodash.get(response, 'data.Results[0].OverallRating');
        return result;
    } catch (err) {
        logger.log('Error while trying to get vehicle rating from NHTSA', { err: err.message });
        throw new Error('Get vehicle rating error');
    }
};

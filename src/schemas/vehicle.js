import Joi from 'joi';

export const getVehicles = {
    request: {
        params: {
            modelYear: Joi.number().required(),
            manufacturer: Joi.string().required(),
            model: Joi.string().required(),
        },
    },
};

export const postVehicles = {
    request: {
        body: {
            modelYear: Joi.number().required(),
            manufacturer: Joi.string().required(),
            model: Joi.string().required(),
        },
    },
};

import Joi from 'joi';

export default {
    request: {
        body: {
            modelYear: Joi.number().required(),
            manufacturer: Joi.string().required(),
            model: Joi.string().required(),
        },
    },
};

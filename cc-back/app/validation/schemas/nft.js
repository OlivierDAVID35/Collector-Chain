const Joi = require('joi');

const createNft = Joi.object({

    name: Joi.string().required(),

    description: Joi.string(),

    price: Joi.number().positive().allow(0),

    forSale: Joi.boolean(),

    media: Joi.string().required(),

    collection_id: Joi.number().required(),

    creator_id: Joi.number().required(),

    owner_id: Joi.number().required(),

    rarity: Joi.string()
        .pattern(/^[1-8]$|^[1-7|][0]$|^[1|6][5]$|^12$/),

    serial: Joi.string(),

    model: Joi.string(),

    showcase_id: Joi.number(),

    properties: Joi.array(),

});

module.exports = {
    createNft,
};

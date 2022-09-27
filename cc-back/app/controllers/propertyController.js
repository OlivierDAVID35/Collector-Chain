const { Property } = require('../models');

module.exports = {
    async getAllProperties(req, res) {
        let property;
        if (req.query.limit) {
            property = await Property.findAllLimit(req.query.limit);
        } else {
            property = await Property.findAll();
        }
        res.json(property);
    },
};

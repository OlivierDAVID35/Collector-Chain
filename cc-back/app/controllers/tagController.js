const { Tag } = require('../models');

module.exports = {
    async getAllTag(req, res) {
        let tag;
        if (req.query.limit) {
            tag = await Tag.findAllLimit(req.query.limit);
        } else {
            tag = await Tag.findAll();
        }
        res.json(tag);
    },
};

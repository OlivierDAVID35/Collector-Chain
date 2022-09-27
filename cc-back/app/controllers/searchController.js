const { Category, Collection, Nft } = require('../models');

module.exports = {
    async searchAll(req, res) {
        const word = req.query.q.toLowerCase();
        const data = [];
        const category = await Category.LookForAll(word);
        data.push({ category });
        const collection = await Collection.LookForAll(word);
        data.push({ collection });
        const nft = await Nft.LookForAll(word);
        data.push({ nft });
        return res.json(data);
    },
};

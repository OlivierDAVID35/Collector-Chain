const { Collection } = require('../models');
const ApiError = require('../errors/apiError');

module.exports = {
    async getAllCollections(req, res) {
        let collections;
        if (req.query.limit) {
            collections = await Collection.findAllLimit(req.query.limit);
        } else {
            collections = await Collection.findAll();
        }
        res.json(collections);
    },

    async getCollectionById(req, res) {
        const collection = await Collection.findById(req.params.id);
        res.json(collection);
    },

    async createCollection(req, res) {
        const newCollection = {
            name: req.body.name,
            description: req.body.description,
            media: req.body.media,
            category_id: req.body.category_id,
        };
        const addCollection = await Collection.create(newCollection);
        return res.json(addCollection);
    },

    async deleteCollection(req, res) {
        await Collection.deleteById(req.params.id);
        return res.json('Collection deleted !!');
    },

    async updateCollection(req, res) {
        const collection = await Collection.findById(req.params.id);
        if (!collection) throw new ApiError("Cette collection n'existe pas", { statusCode: 404 });
        const newCollection = req.body;
        Object.entries(collection).forEach(([key]) => {
            if (!newCollection[key]) newCollection[key] = collection[key];
        });
        const updateCollection = await Collection.update(newCollection);
        return res.json(updateCollection);
    },

    async getCollectionByCategoryId(req, res) {
        const collections = await Collection.getByCategoriesId(req.params.id);
        return res.json(collections);
    },
};

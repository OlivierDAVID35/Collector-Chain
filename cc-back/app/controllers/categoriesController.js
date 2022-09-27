const { Category } = require('../models');
const ApiError = require('../errors/apiError');

module.exports = {
    async getAllCategories(req, res) {
        let categories;
        if (req.query.limit) {
            categories = await Category.findAllLimit(req.query.limit);
        } else {
            categories = await Category.findAll();
        }
        res.json(categories);
    },

    async createCategorie(req, res) {
        const newCategorie = {
            name: req.body.name,
            description: req.body.description,
            media: req.body.media,
        };
        const addCategorie = await Category.create(newCategorie);
        return res.json(addCategorie);
    },

    async deleteCategorie(req, res) {
        await Category.deleteById(req.params.id);
        return res.json('Categorie deleted !!');
    },

    async updateCategories(req, res) {
        const categorie = await Category.findById(req.params.id);
        if (!categorie) throw new ApiError("Cette catégorie n'existe pas", { statusCode: 404 });
        const newCategory = req.body;
        Object.entries(categorie).forEach(([key]) => {
            if (!newCategory[key]) newCategory[key] = categorie[key];
        });
        const updateCategorie = await Category.update(newCategory);
        return res.json(updateCategorie);
    },
};

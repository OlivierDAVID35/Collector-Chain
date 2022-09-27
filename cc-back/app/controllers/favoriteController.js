const { Favorite } = require('../models');

module.exports = {
    async getAllFavorite(req, res) {
        let favorite;
        if (req.query.limit) {
            favorite = await Favorite.getFavoriteByUserIdLimit(req.params.id, req.query.limit);
        } else {
            favorite = await Favorite.getFavoriteByUserId(req.params.id);
        }
        res.json(favorite);
    },

    async addFavorite(req, res) {
        const nftId = req.params.id_nft;
        const userId = req.params.id_user;
        await Favorite.addFavoriteNft(userId, nftId);

        res.json('Favoris ajouté');
    },

    async deleteFavorite(req, res) {
        const nftId = req.params.id_nft;
        const userId = req.params.id_user;

        await Favorite.deleteFavoriteNft(userId, nftId);

        res.json('Favoris supprimé !');
    },
};

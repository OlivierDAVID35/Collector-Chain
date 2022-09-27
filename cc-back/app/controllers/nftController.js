const {
    Nft, Property, Tag, NftHasPropertyHasTag,
} = require('../models');
const { randomUniqueToken } = require('../helper/middelware');
const ApiError = require('../errors/apiError');

module.exports = {
    async getNft(req, res) {
        let nft;
        if (req.query.limit) {
            nft = await Nft.findAllNftLimit(req.query.limit);
        } else {
            nft = await Nft.findAllNft();
        }
        res.json(nft);
    },
    async getNftById(req, res) {
        const nft = await Nft.findNftById(req.params.id);
        res.json(nft);
    },

    async getNftByCollectionId(req, res) {
        let collections;
        if (req.query.limit) {
            collections = await Nft.getByCollectionIdLimit(
                req.params.id_collection,
                req.query.limit,
            );
        } else {
            collections = await Nft.getByCollectionId(req.params.id_collection);
        }
        return res.json(collections);
    },

    async getNftByUserId(req, res) {
        let nft;
        if (req.query.limit) {
            nft = await Nft.getByNftIdLimit(req.params.id_user, req.query.limit);
        } else {
            nft = await Nft.getByNftId(req.params.id_user);
        }
        return res.json(nft);
    },

    async createNft(req, res) {
        const token = await randomUniqueToken();
        const newNft = {
            token,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            forSale: req.body.forSale,
            media: req.body.media,
            collection_id: req.body.collection_id,
            creator_id: req.body.creator_id,
            owner_id: req.body.owner_id,
            rarity: req.body.rarity,
            serial: req.body.serial,
            model: req.body.model,
            showcase_id: req.body.showcase_id,
        };
        const addNft = await Nft.create(newNft);

        if (req.body.properties) {
            const allProperty = await Property.findAll();
            const allTag = await Tag.findAll();
            const property = req.body.properties;

            property.forEach(async (propertie) => {
                const foundPropertie = allProperty.find((e) => e.name === propertie.name);
                const foundTag = allTag.find((e) => e.name === propertie.tag);
                let propId;
                let tagId;
                if (!foundPropertie) {
                    const newPropertie = await Property.create({ name: propertie.name });
                    propId = newPropertie.id;
                } else {
                    propId = foundPropertie.id;
                }
                if (!foundTag) {
                    const newTag = await Tag.create({ name: propertie.tag });
                    tagId = newTag.id;
                } else {
                    tagId = foundTag.id;
                }
                const nftPropertyTag = { name: propId, tag: tagId };
                await NftHasPropertyHasTag.create(addNft.id, nftPropertyTag);
            });
        }
        return res.json(addNft);
    },

    async deleteNft(req, res) {
        await Nft.deleteById(req.params.id);
        return res.json('Nft deleted !!');
    },

    // async updateNft(req, res) {
    //     const nft = await Nft.findById(req.params.id);
    //     if (!nft) throw new ApiError("Ce NFT n'existe pas", { statusCode: 404 });
    //     const newNft = req.body;
    //     Object.entries(nft).forEach(([key]) => {
    //         if (!newNft[key]) newNft[key] = nft[key];
    //     });
    //     const updateNft = await Nft.update(newNft);
    //     return res.json(updateNft);
    // },
    async updateShowcaseNft(req, res) {
        const updataShowcase = await Nft.updateShowcase(req.params.id, req.body.showcase_id);
        if (!updataShowcase) throw new ApiError("nft doesn't exist", { statusCode: 404 });
        return res.json(updataShowcase);
    },
};

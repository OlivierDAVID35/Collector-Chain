const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

/**
 * NFT Model Object
 * @typedef {object} NftModel
 * @property {number} id - nft id
 * @property {string} name - nft name
 * @property {string} description - nft description
 * @property {number} price - price nft
 * @property {boolean} forSale - for sell nft
 * @property {string} media - nft media
 * @property {number} collection_id - nft collection_id
 * @property {number} creator_id - nft creator_id
 * @property {number} owner_id - nft owner_id
 * @property {number} rarity - nft rarity
 */

/**
 * Nft Object
 * @typedef {object} Nft
 * @property {object} nft - Generated nft object
 */

module.exports = class Nft extends CoreDatamapper {
    static tableName = 'nft';

    static async findAllNft() {
        const result = await client.query(`
            SELECT * FROM getAllNftWithJoin
        `);
        return result.rows;
    }

    static async findAllNftLimit(limit) {
        const result = await client.query(
            `
            SELECT * FROM getAllNftWithJoin LIMIT $1
        `,
            [limit],
        );
        return result.rows;
    }

    static async findNftById(id) {
        const result = await client.query(
            `
            SELECT * FROM getAllNftWithJoin
            WHERE id = $1
        `,
            [id],
        );
        return result.rows[0];
    }

    static async getByCollectionId(id) {
        const result = await client.query(
            `SELECT * FROM getAllNftWithJoin 
            WHERE "collection_id" = $1
            `,
            [id],
        );
        return result.rows;
    }

    static async getByCollectionIdLimit(id, limit) {
        const result = await client.query(
            `SELECT * FROM getAllNftWithJoin 
            WHERE "collection_id" = $1
            LIMIT $2
            `,
            [id, limit],
        );
        return result.rows;
    }

    static async getByNftId(id) {
        const result = await client.query(
            `SELECT * FROM getAllNftWithJoin
            WHERE "owner_id" = $1
            `,
            [id],
        );
        return result.rows;
    }

    static async getByNftIdLimit(id, limit) {
        const result = await client.query(
            `SELECT * FROM getAllNftWithJoin
            WHERE "owner_id" = $1
            LIMIT $2
            `,
            [id, limit],
        );
        return result.rows;
    }

    static async create(newNft) {
        const result = await client.query(
            `INSERT INTO "nft" ("token", "name", "description", "price", "forSale", "media", "collection_id", "creator_id", "owner_id", "rarity", "serial", "model", "showcase_id") 
             VALUES ($1, $2, $3, $4, $5 ,$6, $7, $8, $9, $10, $11, $12, $13) 
             RETURNING *
            `,
            [
                newNft.token,
                newNft.name,
                newNft.description,
                newNft.price,
                newNft.forSale,
                newNft.media,
                newNft.collection_id,
                newNft.creator_id,
                newNft.owner_id,
                newNft.rarity,
                newNft.serial,
                newNft.model,
                newNft.showcase_id,
            ],
        );
        return result.rows[0];
    }

    // static async update(nft) {
    //     const result = await client.query(
    //         `
    //         UPDATE "nft"
    //         SET
    //             "token" = $2,
    //             "name" = $3,
    //             "description" = $4,
    //             "price" = $5,
    //             "forsale" = $6,
    //             "media" = $7,
    //             "collection_id" = $8,
    //             "creator_id" = $9,
    //             "owner_id" = $10,
    //             "rarity" = $11,
    //             "serial"= $12,
    //             "model"= $13,
    //             "showcase_id"= $14,

    //         WHERE id = $1
    //         RETURNING *
    //     `,

    //         [
    //             nft.id,
    //             nft.token,
    //             nft.name,
    //             nft.description,
    //             nft.price,
    //             nft.forSale,
    //             nft.media,
    //             nft.collection_id,
    //             nft.creator_id,
    //             nft.owner_id,
    //             nft.rarity,
    //             nft.serial,
    //             nft.model,
    //             nft.showcase_id,
    //         ],
    //     );
    //     return result.rows[0];
    // }
    static async updateShowcase(idNft, idShowcase) {
        const result = await client.query(
            `
            UPDATE "nft"
            SET 
                "showcase_id"= $2              
            WHERE id = $1
            RETURNING *
        `,

            [
                idNft,
                idShowcase,
            ],
        );
        return result.rows[0];
    }
};

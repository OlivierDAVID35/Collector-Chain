const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

/** Favorite Model Object
 * @typedef {object} FavoriteModel
 * @property {number} id - favorite id
 * @property {number} id - user id
 * @property {Object} nft - nft object
*/

/**
 * Favorite Object
 * @typedef {object} Favorite
 * @property {object} favorite - Generates a list of user favorites
 */

module.exports = class Favorite extends CoreDatamapper {
    static tableName = 'favorite';

    static async getFavoriteByUserId(id) {
        const result = await client.query(
            `SELECT * FROM getAllNftWithJoin
             FULL JOIN "favorite" ON "favorite"."nft_id" = id
             WHERE user_id = $1
            `,
            [id],
        );
        return result.rows;
    }

    static async getFavoriteByUserIdLimit(id, limit) {
        const result = await client.query(
            `SELECT * FROM getAllNftWithJoin
            FULL JOIN "favorite" ON "favorite"."nft_id" = id
            WHERE user_id = $1
            LIMIT $2
            `,
            [id, limit],
        );
        return result.rows;
    }

    static async addFavoriteNft(userId, nft) {
        const result = await client.query(
            `INSERT INTO "favorite" (user_id, nft_id) VALUES
                ($1,$2);
                `,
            [
                userId,
                nft,
            ],
        );
        return result.rows[0];
    }

    static async deleteFavoriteNft(userId, nft) {
        const result = await client.query(
            `DELETE FROM "favorite"
            WHERE user_id = $1 AND nft_id = $2
            `,
            [
                userId,
                nft,
            ],
        );
        return result.rows;
    }
};

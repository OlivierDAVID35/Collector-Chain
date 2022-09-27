const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

/** NftHasPropertyHasTag Model Object
 * @typedef {object} NftHasPropertyHasTag
 * @property {number} id -  Nft id
 * @property {string} name -  propertie name
 * @property {string} tag -  propertie tag
*/

module.exports = class NftHasPropertyHasTag extends CoreDatamapper {
    static tableName = 'nft_has_property_has_tag';

    static async create(nftId, propertyTags) {
        const result = await client.query(
            `INSERT INTO "nft_has_property_has_tag" ("nft_id", "property_id", "tag_id") 
             VALUES ($1, $2, $3) 
             RETURNING *
            `,
            [
                nftId,
                propertyTags.name,
                propertyTags.tag,
            ],
        );
        return result.rows[0];
    }
};

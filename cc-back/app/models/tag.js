const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

/** Tag Model Object
 * @typedef {object} Tag
 * @property {string} name - tag name
*/

module.exports = class Tag extends CoreDatamapper {
    static tableName = 'tag';

    static async create(newTag) {
        const result = await client.query(
            `INSERT INTO "tag" (name) 
             VALUES ($1) 
             RETURNING *
            `,
            [
                newTag.name,
            ],
        );
        return result.rows[0];
    }
};

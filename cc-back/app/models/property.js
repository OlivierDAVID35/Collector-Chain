const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

/** Property Model Object
 * @typedef {object} Property
 * @property {string} name - Property name
*/

module.exports = class Property extends CoreDatamapper {
    static tableName = 'property';

    static async create(newPropertie) {
        const result = await client.query(
            `INSERT INTO "property" (name) 
             VALUES ($1) 
             RETURNING *
            `,
            [
                newPropertie.name,
            ],
        );
        return result.rows[0];
    }
};

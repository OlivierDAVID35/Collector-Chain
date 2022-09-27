const client = require('../clients/pg');

module.exports = class CoreDatamapper {
    /**
     * query for find all table
     * @returns all in database contained in tableName
     */
    static async findAll() {
        const result = await client.query(`
            SELECT * FROM "${this.tableName}"
        `);
        return result.rows;
    }

    static async findAllByColumn(columnName) {
        const result = await client.query(
            `
            SELECT $1 FROM "${this.tableName}" 
        `,
            [columnName],
        );
        return result.rows;
    }

    static async findOneByColumn(columnName, value) {
        const result = await client.query(
            `
            SELECT * FROM "${this.tableName}" WHERE $1 = $2
        `,
            [columnName, value],
        );
        return result.rows[0];
    }

    static async findAllLimit(limit) {
        const result = await client.query(
            `
            SELECT * FROM "${this.tableName}" 
            LIMIT $1
        `,
            [limit],
        );
        return result.rows;
    }

    static async findById(id) {
        const result = await client.query(
            `
            SELECT * FROM "${this.tableName}"
            WHERE id = $1
        `,
            [id],
        );
        return result.rows[0];
    }

    static async deleteById(id) {
        const result = await client.query(
            `
            DELETE FROM "${this.tableName}"
            WHERE id = $1
            `,
            [id],
        );
        return result.rows[0];
    }

    static async LookForAll(text) {
        const result = await client.query(
            `
            SELECT * FROM "${this.tableName}" WHERE lower("name") LIKE $1
            `,
            [`%${text}%`],
        );
        return result.rows;
    }
};

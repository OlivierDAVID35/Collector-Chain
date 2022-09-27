const bcrypt = require('bcrypt');
const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

const saltRounds = 10;

/** User Model Object
 * @typedef {object} UserModel
 * @property {number} id - Primary key
 * @property {string} email - email user
 * @property {string} nickname - nickname user
 * @property {string} password - encrypted
 * @property {number} wallet - actual state of the personnal wallet
 * @property {boolean} isAdmin - egal true if this user is an admin
 * @property {string} media - link to user picture
*/

/**
 * User Object
 * @typedef {object} User
 * @property {object} user - Generated user model
 */

module.exports = class User extends CoreDatamapper {
    static tableName = 'user';

    /**
     * find all user data from email
     * @param {string} email
     * @returns every user data from email
     */
    static async findUserByEmail(email) {
        const result = await client.query(
            'SELECT * FROM "user" WHERE email = $1',
            [email],
        );
        return result.rows[0];
    }

    /**
     *
     * @typedef {object} newUser
     * @property {string} nickname
     * @property {string} email
     * @property {string} password
     */
    static async create(newUser) {
        const result = await client.query(
            `INSERT INTO "user" (nickname, email, password) 
             VALUES ($1, $2, $3)
             RETURNING *
            `,
            [newUser.nickname, newUser.email, newUser.password],
        );
        return result.rows[0];
    }

    static async update(user) {
        const result = await client.query(
            `
            UPDATE "user"
            SET 
                "email" = $2,
                "nickname" = $3,
                "password" = $4,
                "wallet" = $5,
                "isAdmin" = $6,
                "media" = $7,
                "name" = $8,
                "lastName" = $9,
                "isOpenToContact" = $10
                
            WHERE id = $1
            RETURNING *
        `,

            [
                user.id,
                user.email,
                user.nickname,
                user.password,
                user.wallet,
                user.isAdmin,
                user.media,
                user.name,
                user.lastName,
                user.isOpenToContact,
            ],
        );
        return result.rows[0];
    }

    static async recoveryPassword(randomPassword, userEmail) {
        const hashedPassword = await bcrypt.hash(randomPassword, saltRounds);
        const result = await client.query(
            `
        UPDATE "user"
        SET "password" = '${hashedPassword}'
        WHERE email = '${userEmail}'
        RETURNING *
        `,
        );
        return result.rows[0];
    }
};

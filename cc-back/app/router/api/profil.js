const express = require('express');

const router = express.Router();

const userController = require('../../controllers/userController');
const controllerHandler = require('../../helper/controllerHandler');

const { profilId, updateProfil } = require('../../validation/schemas/user');
const validation = require('../../validation/validator');

/**
 * User Error
 * @typedef {object} UserError
 * @property {string} error - error details
 */

/**
 * GET /profil/:id
 * @summary Get to get user
 * @tags User
 * @param {User} - User Model Object
 * @param {number} id - Primary key
 * @param {string} email.query - email user
 * @param {string} nickname.query - nickname user
 * @param {string} password.query - encrypted
 * @param {number} wallet - actual state of the personnal wallet
 * @param {boolean} isAdmin - egal true if this user is an admin
 * @param {string} media - link to user picture
 * @return {User} 200 - success response - application/json
 * @return {UserError} 400 - error response - application/json
 */
router.get('/profil/:id', validation('params', profilId), controllerHandler(userController.getUser));
/**
 * DELETE /profil/:id
 * @summary Delete to delete user
 * @tags User
 * @param {number} id.query - profil user by id
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.delete('/profil/:id', controllerHandler(userController.deleteProfilUser));
/**
 * PATCH /profil/:id
 * @summary Modify to update user
 * @tags User
 * @param {User} - User Model Object
 * @param {number} id.query - Primary key
 * @param {string} email.query - email user
 * @param {string} nickname.query - nickname user
 * @param {string} password.query - encrypted
 * @param {number} wallet - actual state of the personnal wallet
 * @param {boolean} isAdmin - egal true if this user is an admin
 * @param {string} media.query - link to user picture
 * @return {User} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.patch('/profil/:id', validation('body', updateProfil), controllerHandler(userController.updateUserProfile));

module.exports = router;

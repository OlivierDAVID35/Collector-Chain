const express = require('express');

const router = express.Router();

const userController = require('../../controllers/userController');
const controllerHandler = require('../../helper/controllerHandler');

const { userLogin } = require('../../validation/schemas/user');
const validation = require('../../validation/validator');

/**
 * User Error
 * @typedef {object} UserError
 * @property {string} error - error details
 */

/**
 * POST /login
 * @summary Post to login a registered user
 * @tags User
 * @param {string} email.query - user email
 * @param {string} password.query - user password
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.post('/login', validation('body', userLogin), controllerHandler(userController.loginUser));

module.exports = router;

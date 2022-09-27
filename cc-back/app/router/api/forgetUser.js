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
 * GET /forget_user
 * @summary Get to forget_user
 * @tags Forget_user
 * @param {string} email.query - user email
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/forget_user', controllerHandler(userController.resetMail));
/**
 * POST /forget_user
 * @summary Post to forget_user
 * @tags Forget_user
 * @param {string} email.query - user email
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.post('/forget_user', validation('body', userLogin), controllerHandler(userController.resetMail));

module.exports = router;

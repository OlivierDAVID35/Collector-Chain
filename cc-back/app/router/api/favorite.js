const express = require('express');

const router = express.Router();

const favoriteController = require('../../controllers/favoriteController');
const controllerHandler = require('../../helper/controllerHandler');

/**
 * User Error
 * @typedef {object} UserError
 * @property {string} error - error details
 */

/**
 * GET /favorite/:id
 * @summary Get to favorite
 * @tags Favorite
 * @param {number} id.query - user_id
 * @return {Favorite} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/favorite/:id', controllerHandler(favoriteController.getAllFavorite));
/**
 * POST /favorite/:id_user/:id_nft
 * @summary Post to add favorite nft
 * @tags Favorite
 * @param {number} id.query - id from nft added
 * @param {number} id.query - id from user
 * @return {Favorite} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.post('/favorite/:id_user/:id_nft', controllerHandler(favoriteController.addFavorite));
/**
 * DELETE /favorite/:id_user/:id_nft
 * @summary Delete to delete favorite nft
 * @tags Favorite
 * @param {number} id.query - id from nft deleted
 * @param {number} id.query - id from user
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.delete('/favorite/:id_user/:id_nft', controllerHandler(favoriteController.deleteFavorite));

module.exports = router;

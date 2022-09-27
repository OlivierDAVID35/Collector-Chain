const express = require('express');

const router = express.Router();

const collectionsController = require('../../controllers/collectionsController');

const controllerHandler = require('../../helper/controllerHandler');

/**
 * User Error
 * @typedef {object} UserError
 * @property {string} error - error details
 */

/**
 * GET /collections
 * @summary Get to collections
 * @tags Collections
 * @param {Collection} - Collection Model Object
 * @param {string} name.query - collection name
 * @param {string} description.query - collection description
 * @param {string} media.query - collection media
 * @param {number} category_id.query - category_id
 * @return {Collection} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/collections', controllerHandler(collectionsController.getAllCollections));
/**
 * GET /collection/:id
 * @summary Get to collection/:id
 * @tags Collections
 * @param {Collection} - Collection Model Object
 * @param {number} id.query - collection by id
 * @param {string} name.query - collection name
 * @param {string} description.query - collection description
 * @param {string} media.query - collection media
 * @param {number} category_id.query - category_id
 * @return {Collection} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/collection/:id', controllerHandler(collectionsController.getCollectionById));
/**
 * POST /collection
 * @summary Post collection
 * @tags Collections
 * @param {Collection} Collection - Collection Object Model
 * @param {number} id - collection by id
 * @param {string} name.query - collection name
 * @param {string} description.query - collection description
 * @param {string} media.query - collection media
 * @param {number} category_id.query - category_id
 * @return {Object} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.post('/collection', controllerHandler(collectionsController.createCollection));
/**
 * DELETE /collection/:id
 * @summary Delete to collection/:id
 * @tags Collections
 * @param {number} id.query - id from collection deleted
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.delete('/collection/:id', controllerHandler(collectionsController.deleteCollection));
/**
 * PATCH /collection/:id
 * @summary Modify to collection/:id
 * @tags Collections
 * @param {number} id - collection by id
 * @param {string} name.query - collection name
 * @param {string} description.query - collection description
 * @param {string} media.query - collection media
 * @param {number} category_id.query - category_id
 * @return {Object} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.patch('/collection/:id', controllerHandler(collectionsController.updateCollection));
/**
 * GET /categories/:id/collections
 * @tags Collections
 * @summary Get to /categories/:id/collections
 * @param {number} id.query - collections by category id
 * @return {Object} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/categories/:id/collections', controllerHandler(collectionsController.getCollectionByCategoryId));

module.exports = router;

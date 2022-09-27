const express = require('express');

const router = express.Router();

const nftController = require('../../controllers/nftController');
const controllerHandler = require('../../helper/controllerHandler');

const { createNft } = require('../../validation/schemas/nft');
const validation = require('../../validation/validator');

/**
 * User Error
 * @typedef {object} UserError
 * @property {string} error - error details
 */

/**
 * GET /nft
 * @summary Get to nft
 * @tags Nft
 * @param {Nft} - Nft Model Object
 * @param {string} name.query - table name nft
 * @return {Nft} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/nft', controllerHandler(nftController.getNft));
/**
 * GET /nft/:id
 * @summary Get to nft by id
 * @tags Nft
 * @param {Nft} - Nft Model Object
 * @param {id} id.query - nft by id
 * @param {string} name.query - name nft
 * @return {Nft} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/nft/:id', controllerHandler(nftController.getNftById));
/**
 * POST /:id/nft
 * @summary Post to nft
 * @tags Nft
 * @param {Nft} - Nft Model Object
 * @param {id} id - nft by id
 * @param {string} name.query - nft name
 * @param {string} description.query - nft description
 * @param {number} price.query - price nft
 * @param {boolean} forSale.query - for sell nft
 * @param {string} media.query - nft media
 * @param {number} collection_id - nft collection_id
 * @param {number} creator_id - nft creator_id
 * @param {number} owner_id - nft owner_id
 * @param {number} rarity.query - nft rarity
 * @return {Nft} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.post('/nft', validation('body', createNft), controllerHandler(nftController.createNft));
/**
 * DELETE /nft/:id/delete
 * @summary Delete nft
 * @tags Nft
 * @param {Nft} - Nft Model Object
 * @param {number} id.query - nft by id
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.delete('/nft/:id', controllerHandler(nftController.deleteNft));
/**
 * PATCH /:id/nft/update
 * @summary Modify nft
 * @tags Nft
 * @param {Nft} Nft - Nft Model Object
 * @param {number} id.query - nft by id
 * @return {Object} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.patch('/nft/:id', controllerHandler(nftController.updateShowcaseNft));
/**
 * GET /collections/:id/nft
 * @summary Get to collection by nft_id
 * @tags Nft
 * @param {Nft} Nft - Nft Model Object
 * @param {number} id.query - nft by id
 * @return {Object} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/collections/:id_collection/nft', controllerHandler(nftController.getNftByCollectionId));
/**
 * GET /:id/nft
 * @summary Get to nft by user
 * @tags Nft
 * @param {Nft} Nft - Nft Model Object
 * @param {number} id.query - nft by id
 * @return {Object} 200 - success response - application/json
 * @return {string} 400 - error response - application/json
 */
router.get('/:id_user/nft', controllerHandler(nftController.getNftByUserId));

module.exports = router;

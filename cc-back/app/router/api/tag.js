const express = require('express');

const router = express.Router();

const tagController = require('../../controllers/tagController');

const controllerHandler = require('../../helper/controllerHandler');

/**
 * GET /tag
 * @summary Get to all tags
 * @tags Tag
 * @param {string} name.query - tag table name
 * @return {Tag} 200 - success response - application/json
 */
router.get('/tag', controllerHandler(tagController.getAllTag));

module.exports = router;

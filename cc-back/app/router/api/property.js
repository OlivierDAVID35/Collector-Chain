const express = require('express');

const router = express.Router();

const propertyController = require('../../controllers/propertyController');

const controllerHandler = require('../../helper/controllerHandler');

/**
 * GET /property
 * @summary Get to all property
 * @tags Property
 * @param {string} name.query - property table name
 * @return {Property} 200 - success response - application/json
 */
router.get('/property', controllerHandler(propertyController.getAllProperties));

module.exports = router;

const express = require('express');

const router = express.Router();

const searchController = require('../../controllers/searchController');

const controllerHandler = require('../../helper/controllerHandler');

router.get('/search', controllerHandler(searchController.searchAll));

module.exports = router;

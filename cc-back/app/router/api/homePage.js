const express = require('express');

const router = express.Router();

const homePageController = require('../../controllers/homePageController');
const controllerHandler = require('../../helper/controllerHandler');

/* Route to Home page */
router.get('/', controllerHandler(homePageController.displayHomePage));

module.exports = router;

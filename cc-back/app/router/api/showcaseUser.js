const express = require('express');

const router = express.Router();

const showcaseUserController = require('../../controllers/showcaseController');

router.get('/showcase/:id', showcaseUserController.showcasePage);

module.exports = router;

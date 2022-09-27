const express = require('express');

const router = express.Router();

const apiRouter = require('./api');
const websiteRouter = require('./website');

router.use('/api', apiRouter);
router.use('/', websiteRouter);

module.exports = router;

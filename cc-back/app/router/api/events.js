const express = require('express');

const router = express.Router();

const eventsController = require('../../controllers/eventsController');
// const controllerHandler = require('../helper/controllerHandler');

router.get('/events', eventsController.getAllEvent);
// router.post('/events', controllerHandler(eventsController.createEvent));
/*
router.delete('/events', controllerHandler(eventsController.deleteEvent));
router.patch('/events', controllerHandler(eventsController.updateEvent));
*/
module.exports = router;

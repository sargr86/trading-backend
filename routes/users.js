const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/session/:room', usersController.getOpentokParams);

module.exports = router;

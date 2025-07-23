const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/data', userController.getUsers);

router.get('/data/gender-stats', userController.getGenderStats);

module.exports = router;

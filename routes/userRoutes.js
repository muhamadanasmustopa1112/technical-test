const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/data', userController.getUsers);

/**
 * @swagger
 * /api/gender-stats:
 *   get:
 *     summary: Get all gender statistics
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/data/gender-stats', userController.getGenderStats);

module.exports = router;

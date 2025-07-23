const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Get paginated list of users
 *     description: This API may respond slowly for the first request due to free-tier hosting on Replit. Subsequent requests will be faster.

 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Page number (default is 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Number of users per page (default is 10)
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/data', userController.getUsers);

/**
 * @swagger
 * /api/data/gender-stats:
 *   get:
 *     summary: Get all gender statistics
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/data/gender-stats', userController.getGenderStats);

module.exports = router;

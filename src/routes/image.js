const express = require('express');
const imageController = require('../controllers/imageController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for note
router.post('/', authenticateJWT, imageController.uploadImage); // Get note profile (protected)
router.post('/upload/', authenticateJWT, imageController.uploadPhoto); // Get note profile (protected)

module.exports = router;

// routes/durationType.js
const express = require('express');
const durationTypeController = require('../controllers/durationTypeController');
const authenticateJWT = require('../middleware/authMiddleware'); // Optional if you want to protect the routes

const router = express.Router();

// Routes for durationType
router.post('/', authenticateJWT, durationTypeController.createDurationType); // Create durationType
router.get('/', authenticateJWT, durationTypeController.getAllDurationTypes); // Get all durationTypes
router.get('/:id', authenticateJWT, durationTypeController.getDurationTypeById); // Get a single durationType by ID
router.put('/:id', authenticateJWT, durationTypeController.updateDurationType); // Update a durationType
router.delete('/:id', authenticateJWT, durationTypeController.deleteDurationType); // Delete a durationType

module.exports = router;

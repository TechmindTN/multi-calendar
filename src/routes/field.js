// routes/field.js
const express = require('express');
const fieldController = require('../controllers/fieldController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for field
router.get('/', authenticateJWT, fieldController.getFields); // Get field profile (protected)
router.post('/', authenticateJWT, fieldController.createField); // Get field profile (protected)

router.get('/:id', authenticateJWT, fieldController.getField); // Get field profile (protected)

router.put('/:id', authenticateJWT, fieldController.updateField); // Get field profile (protected)
router.delete('/:id', authenticateJWT, fieldController.deleteField); // Get field profile (protected)


module.exports = router;

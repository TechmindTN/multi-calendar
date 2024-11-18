// routes/role.js
const express = require('express');
const roleController = require('../controllers/roleController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for role
router.get('/', authenticateJWT, roleController.getRoles); // Get role profile (protected)
router.post('/', authenticateJWT, roleController.createRole); // Get role profile (protected)
router.post('/hello', authenticateJWT, roleController.createRole); // Get role profile (protected)

router.get('/:id', authenticateJWT, roleController.getRole); // Get role profile (protected)

router.put('/:id', authenticateJWT, roleController.updateRole); // Get role profile (protected)
router.delete('/:id', authenticateJWT, roleController.deleteRole); // Get role profile (protected)


module.exports = router;

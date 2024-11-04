// routes/user.js
const express = require('express');
const userController = require('../controllers/userController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for user
router.get('/', authenticateJWT, userController.getUsers); // Get user profile (protected)
router.post('/', authenticateJWT, userController.createUser); // Get user profile (protected)

router.get('/:id', authenticateJWT, userController.getUser); // Get user profile (protected)

router.put('/:id', authenticateJWT, userController.updateUser); // Get user profile (protected)
router.delete('/:id', authenticateJWT, userController.deleteUser); // Get user profile (protected)


module.exports = router;

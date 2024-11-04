// routes/auth.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Routes for authentication
router.post('/register', authController.register); // Register route
router.post('/login', authController.login); // Login route

module.exports = router;

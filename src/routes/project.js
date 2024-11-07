// routes/project.js
const express = require('express');
const projectController = require('../controllers/projectController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for project
router.get('/', authenticateJWT, projectController.getProjects); // Get project profile (protected)
router.post('/', authenticateJWT, projectController.createProject); // Get project profile (protected)

router.get('/:id', authenticateJWT, projectController.getProject); // Get project profile (protected)

router.put('/:id', authenticateJWT, projectController.updateProject); // Get project profile (protected)
router.delete('/:id', authenticateJWT, projectController.deleteProject); // Get project profile (protected)


module.exports = router;

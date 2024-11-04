// routes/project.js
const express = require('express');
const projectController = require('../controllers/projectController');
const authenticateJWT = require('../middleware/authMiddleware'); // Optional if you want to protect the routes

const router = express.Router();

// Routes for project
router.post('/',  projectController.createProject); // Create project
router.get('/',  projectController.getAllProjects); // Get all projects
router.get('/:id',  projectController.getProjectById); // Get a single project by ID
router.put('/:id',  projectController.updateProject); // Update an project
router.delete('/:id',  projectController.deleteProject); // Delete an project

module.exports = router;

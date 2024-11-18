// routes/project.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const projectController = require('../controllers/projectController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, '../uploads/') });

// Routes for project
router.get('/', authenticateJWT, projectController.getProjects); // Get project profile (protected)
router.post('/', authenticateJWT, projectController.createProject); // Get project profile (protected)

router.get('/:id', authenticateJWT, projectController.getProject); // Get project profile (protected)

router.put('/:id', authenticateJWT, projectController.updateProject); // Get project profile (protected)
router.delete('/:id', authenticateJWT, projectController.deleteProject); // Get project profile (protected)
// router.post('/import/', upload.single('file'), projectController.importProjects);
// router.post('/imports',authenticateJWT,  projectController.importsProjects);
router.post('/hello',authenticateJWT,  projectController.hello);

module.exports = router;

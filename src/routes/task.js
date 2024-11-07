// routes/task.js
const express = require('express');
const taskController = require('../controllers/taskController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for task
router.get('/', authenticateJWT, taskController.getTasks); // Get task profile (protected)
router.post('/', authenticateJWT, taskController.createTask); // Get task profile (protected)

router.get('/:id', authenticateJWT, taskController.getTask); // Get task profile (protected)

router.put('/:id', authenticateJWT, taskController.updateTask); // Get task profile (protected)
router.delete('/:id', authenticateJWT, taskController.deleteTask); // Get task profile (protected)


module.exports = router;

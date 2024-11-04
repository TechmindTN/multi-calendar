// routes/task.js
const express = require('express');
const taskController = require('../controllers/taskController');
const authenticateJWT = require('../middleware/authMiddleware'); // Optional if you want to protect the routes

const router = express.Router();

// Routes for task
router.post('/',  taskController.createTask); // Create task
router.get('/',  taskController.getAllTasks); // Get all tasks
router.get('/:id',  taskController.getTaskById); // Get a single task by ID
router.put('/:id',  taskController.updateTask); // Update an task
router.delete('/:id',  taskController.deleteTask); // Delete an task

module.exports = router;

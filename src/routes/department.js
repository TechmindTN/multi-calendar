// routes/department.js
const express = require('express');
const departmentController = require('../controllers/departmentController');
const authenticateJWT = require('../middleware/authMiddleware'); // Optional if you want to protect the routes

const router = express.Router();

// Routes for department
router.post('/', authenticateJWT, departmentController.createDepartment); // Create department
router.get('/', authenticateJWT, departmentController.getAllDepartments); // Get all departments
router.get('/:id', authenticateJWT, departmentController.getDepartmentById); // Get a single department by ID
router.put('/:id', authenticateJWT, departmentController.updateDepartment); // Update a department
router.delete('/:id', authenticateJWT, departmentController.deleteDepartment); // Delete a department

module.exports = router;

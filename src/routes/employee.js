// routes/employee.js
const express = require('express');
const employeeController = require('../controllers/employeeController');
const authenticateJWT = require('../middleware/authMiddleware'); // Optional if you want to protect the routes

const router = express.Router();

// Routes for employee
router.post('/',  employeeController.createEmployee); // Create employee
router.get('/',  employeeController.getAllEmployees); // Get all employees
router.get('/:id',  employeeController.getEmployeeById); // Get a single employee by ID
router.put('/:id',  employeeController.updateEmployee); // Update an employee
router.delete('/:id',  employeeController.deleteEmployee); // Delete an employee

module.exports = router;

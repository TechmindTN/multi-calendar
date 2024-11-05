// routes/company.js
const express = require('express');
const companyController = require('../controllers/companyController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for company
router.get('/', authenticateJWT, companyController.getCompanys); // Get company profile (protected)
router.post('/', authenticateJWT, companyController.createCompany); // Get company profile (protected)

router.get('/:id', authenticateJWT, companyController.getCompany); // Get company profile (protected)

router.put('/:id', authenticateJWT, companyController.updateCompany); // Get company profile (protected)
router.delete('/:id', authenticateJWT, companyController.deleteCompany); // Get company profile (protected)


module.exports = router;

// routes/paymentMethod.js
const express = require('express');
const paymentMethodController = require('../controllers/paymentMethodController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for paymentMethod
router.get('/', authenticateJWT, paymentMethodController.getPaymentMethods); // Get paymentMethod profile (protected)
router.post('/', authenticateJWT, paymentMethodController.createPaymentMethod); // Get paymentMethod profile (protected)

router.get('/:id', authenticateJWT, paymentMethodController.getPaymentMethod); // Get paymentMethod profile (protected)

router.put('/:id', authenticateJWT, paymentMethodController.updatePaymentMethod); // Get paymentMethod profile (protected)
router.delete('/:id', authenticateJWT, paymentMethodController.deletePaymentMethod); // Get paymentMethod profile (protected)


module.exports = router;

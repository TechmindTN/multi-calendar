// routes/payment.js
const express = require('express');
const paymentController = require('../controllers/paymentController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for payment
router.get('/', authenticateJWT, paymentController.getPayments); // Get payment profile (protected)
router.post('/', authenticateJWT, paymentController.createPayment); // Get payment profile (protected)

router.get('/:id', authenticateJWT, paymentController.getPayment); // Get payment profile (protected)

router.put('/:id', authenticateJWT, paymentController.updatePayment); // Get payment profile (protected)
router.delete('/:id', authenticateJWT, paymentController.deletePayment); // Get payment profile (protected)


module.exports = router;

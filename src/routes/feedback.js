// routes/feedback.js
const express = require('express');
const feedbackController = require('../controllers/feedbackController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for feedback
router.get('/', authenticateJWT, feedbackController.getFeedbacks); // Get feedback profile (protected)
router.post('/', authenticateJWT, feedbackController.createFeedback); // Get feedback profile (protected)

router.get('/:id', authenticateJWT, feedbackController.getFeedback); // Get feedback profile (protected)

router.put('/:id', authenticateJWT, feedbackController.updateFeedback); // Get feedback profile (protected)
router.delete('/:id', authenticateJWT, feedbackController.deleteFeedback); // Get feedback profile (protected)


module.exports = router;

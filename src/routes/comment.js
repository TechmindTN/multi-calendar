// routes/comment.js
const express = require('express');
const commentController = require('../controllers/commentController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for comment
router.get('/', authenticateJWT, commentController.getComments); // Get comment profile (protected)
router.post('/', authenticateJWT, commentController.createComment); // Get comment profile (protected)

router.get('/:id', authenticateJWT, commentController.getComment); // Get comment profile (protected)

router.put('/:id', authenticateJWT, commentController.updateComment); // Get comment profile (protected)
router.delete('/:id', authenticateJWT, commentController.deleteComment); // Get comment profile (protected)


module.exports = router;

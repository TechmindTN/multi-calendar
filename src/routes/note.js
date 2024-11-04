// routes/note.js
const express = require('express');
const noteController = require('../controllers/noteController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for note
router.get('/', authenticateJWT, noteController.getNotes); // Get note profile (protected)
router.post('/', authenticateJWT, noteController.createNote); // Get note profile (protected)

router.get('/:id', authenticateJWT, noteController.getNote); // Get note profile (protected)

router.put('/:id', authenticateJWT, noteController.updateNote); // Get note profile (protected)
router.delete('/:id', authenticateJWT, noteController.deleteNote); // Get note profile (protected)


module.exports = router;

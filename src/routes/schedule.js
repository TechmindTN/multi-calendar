// routes/schedule.js
const express = require('express');
const scheduleController = require('../controllers/scheduleController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for schedule
router.get('/', authenticateJWT, scheduleController.getSchedules); // Get schedule profile (protected)
router.post('/', authenticateJWT, scheduleController.createSchedule); // Get schedule profile (protected)

router.get('/:id', authenticateJWT, scheduleController.getSchedule); // Get schedule profile (protected)

router.put('/:id', authenticateJWT, scheduleController.updateSchedule); // Get schedule profile (protected)
router.delete('/:id', authenticateJWT, scheduleController.deleteSchedule); // Get schedule profile (protected)


module.exports = router;

// routes/schedule.js
const Schedule = require('../models/Schedule'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Schedule
exports.createSchedule= async (req, res) => {
    try {
      const schedule = await Schedule.create(req.body);
      res.status(201).json(schedule);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Schedules
  exports.getSchedules= async (req, res) => {
    try {
      const schedules = await Schedule.findAll();
      res.status(200).json(schedules);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Schedule by ID
  exports.getSchedule= async (req, res) => {
    try {
      const schedule = await Schedule.findByPk(req.params.id);
      if (schedule) {
        res.status(200).json(schedule);
      } else {
        res.status(404).json({ error: 'Schedule not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Schedule by ID
  exports.updateSchedule= async (req, res) => {
    try {
      const schedule = await Schedule.findByPk(req.params.id);
      if (schedule) {
        await schedule.update(req.body);
        res.status(200).json(schedule);
      } else {
        res.status(404).json({ error: 'Schedule not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Schedule by ID
  exports.deleteSchedule= async (req, res) => {
    try {
      const schedule = await Schedule.findByPk(req.params.id);
      if (schedule) {
        await schedule.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Schedule not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


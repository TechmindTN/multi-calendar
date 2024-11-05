// routes/feedback.js
const Feedback = require('../models/Feedback'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Feedback
exports.createFeedback= async (req, res) => {
    try {
      const feedback = await Feedback.create(req.body);
      res.status(201).json(feedback);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Feedbacks
  exports.getFeedbacks= async (req, res) => {
    try {
      const feedbacks = await Feedback.findAll();
      res.status(200).json(feedbacks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Feedback by ID
  exports.getFeedback= async (req, res) => {
    try {
      const feedback = await Feedback.findByPk(req.params.id);
      if (feedback) {
        res.status(200).json(feedback);
      } else {
        res.status(404).json({ error: 'Feedback not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Feedback by ID
  exports.updateFeedback= async (req, res) => {
    try {
      const feedback = await Feedback.findByPk(req.params.id);
      if (feedback) {
        await feedback.update(req.body);
        res.status(200).json(feedback);
      } else {
        res.status(404).json({ error: 'Feedback not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Feedback by ID
  exports.deleteFeedback= async (req, res) => {
    try {
      const feedback = await Feedback.findByPk(req.params.id);
      if (feedback) {
        await feedback.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Feedback not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


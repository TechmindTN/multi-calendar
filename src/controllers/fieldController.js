// routes/field.js
const Field = require('../models/Field'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Field
exports.createField= async (req, res) => {
    try {
      const field = await Field.create(req.body);
      res.status(201).json(field);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Fields
  exports.getFields= async (req, res) => {
    try {
      const fields = await Field.findAll();
      res.status(200).json(fields);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Field by ID
  exports.getField= async (req, res) => {
    try {
      const field = await Field.findByPk(req.params.id);
      if (field) {
        res.status(200).json(field);
      } else {
        res.status(404).json({ error: 'Field not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Field by ID
  exports.updateField= async (req, res) => {
    try {
      const field = await Field.findByPk(req.params.id);
      if (field) {
        await field.update(req.body);
        res.status(200).json(field);
      } else {
        res.status(404).json({ error: 'Field not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Field by ID
  exports.deleteField= async (req, res) => {
    try {
      const field = await Field.findByPk(req.params.id);
      if (field) {
        await field.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Field not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


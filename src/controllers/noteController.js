// routes/note.js
const Note = require('../models/Note'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Note
exports.createNote= async (req, res) => {
    try {
      const note = await Note.create(req.body);
      res.status(201).json(note);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Notes
  exports.getNotes= async (req, res) => {
    try {
      const notes = await Note.findAll();
      res.status(200).json(notes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Note by ID
  exports.getNote= async (req, res) => {
    try {
      const note = await Note.findByPk(req.params.id);
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ error: 'Note not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Note by ID
  exports.updateNote= async (req, res) => {
    try {
      const note = await Note.findByPk(req.params.id);
      if (note) {
        await note.update(req.body);
        res.status(200).json(note);
      } else {
        res.status(404).json({ error: 'Note not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Note by ID
  exports.deleteNote= async (req, res) => {
    try {
      const note = await Note.findByPk(req.params.id);
      if (note) {
        await note.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Note not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


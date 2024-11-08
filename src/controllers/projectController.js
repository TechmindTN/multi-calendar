// routes/project.js
const Project = require('../models/Project'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Project
exports.createProject= async (req, res) => {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Projects
  exports.getProjects= async (req, res) => {
    try {
      const projects = await Project.findAll();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Project by ID
  exports.getProject= async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id);
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ error: 'Project not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Project by ID
  exports.updateProject= async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id);
      if (project) {
        await project.update(req.body);
        res.status(200).json(project);
      } else {
        res.status(404).json({ error: 'Project not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Project by ID
  exports.deleteProject= async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id);
      if (project) {
        await project.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Project not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


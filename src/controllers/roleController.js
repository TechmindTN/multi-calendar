// routes/role.js
const Role = require('../models/Role'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Role
exports.createRole= async (req, res) => {
    try {
      const role = await Role.create(req.body);
      res.status(201).json(role);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Roles
  exports.getRoles= async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.status(200).json(roles);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Role by ID
  exports.getRole= async (req, res) => {
    try {
      const role = await Role.findByPk(req.params.id);
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).json({ error: 'Role not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Role by ID
  exports.updateRole= async (req, res) => {
    try {
      const role = await Role.findByPk(req.params.id);
      if (role) {
        await role.update(req.body);
        res.status(200).json(role);
      } else {
        res.status(404).json({ error: 'Role not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Role by ID
  exports.deleteRole= async (req, res) => {
    try {
      const role = await Role.findByPk(req.params.id);
      if (role) {
        await role.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Role not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


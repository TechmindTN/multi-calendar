// routes/privilege.js
const Privilege = require('../models/Privilege'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Privilege
exports.createPrivilege= async (req, res) => {
    try {
      const privilege = await Privilege.create(req.body);
      res.status(201).json(privilege);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Privileges
  exports.getPrivileges= async (req, res) => {
    try {
      const privileges = await Privilege.findAll();
      res.status(200).json(privileges);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Privilege by ID
  exports.getPrivilege= async (req, res) => {
    try {
      const privilege = await Privilege.findByPk(req.params.id);
      if (privilege) {
        res.status(200).json(privilege);
      } else {
        res.status(404).json({ error: 'Privilege not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Privilege by ID
  exports.updatePrivilege= async (req, res) => {
    try {
      const privilege = await Privilege.findByPk(req.params.id);
      if (privilege) {
        await privilege.update(req.body);
        res.status(200).json(privilege);
      } else {
        res.status(404).json({ error: 'Privilege not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Privilege by ID
  exports.deletePrivilege= async (req, res) => {
    try {
      const privilege = await Privilege.findByPk(req.params.id);
      if (privilege) {
        await privilege.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Privilege not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


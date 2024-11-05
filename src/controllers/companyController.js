// routes/company.js
const Company = require('../models/Company'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Company
exports.createCompany= async (req, res) => {
    try {
      const company = await Company.create(req.body);
      res.status(201).json(company);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Companys
  exports.getCompanys= async (req, res) => {
    try {
      const companys = await Company.findAll();
      res.status(200).json(companys);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Company by ID
  exports.getCompany= async (req, res) => {
    try {
      const company = await Company.findByPk(req.params.id);
      if (company) {
        res.status(200).json(company);
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Company by ID
  exports.updateCompany= async (req, res) => {
    try {
      const company = await Company.findByPk(req.params.id);
      if (company) {
        await company.update(req.body);
        res.status(200).json(company);
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Company by ID
  exports.deleteCompany= async (req, res) => {
    try {
      const company = await Company.findByPk(req.params.id);
      if (company) {
        await company.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


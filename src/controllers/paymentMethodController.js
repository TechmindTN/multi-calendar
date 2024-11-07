// routes/paymentMethod.js
const PaymentMethod = require('../models/PaymentMethod'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE PaymentMethod
exports.createPaymentMethod= async (req, res) => {
    try {
      const paymentMethod = await PaymentMethod.create(req.body);
      res.status(201).json(paymentMethod);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all PaymentMethods
  exports.getPaymentMethods= async (req, res) => {
    try {
      const paymentMethods = await PaymentMethod.findAll();
      res.status(200).json(paymentMethods);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ PaymentMethod by ID
  exports.getPaymentMethod= async (req, res) => {
    try {
      const paymentMethod = await PaymentMethod.findByPk(req.params.id);
      if (paymentMethod) {
        res.status(200).json(paymentMethod);
      } else {
        res.status(404).json({ error: 'PaymentMethod not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE PaymentMethod by ID
  exports.updatePaymentMethod= async (req, res) => {
    try {
      const paymentMethod = await PaymentMethod.findByPk(req.params.id);
      if (paymentMethod) {
        await paymentMethod.update(req.body);
        res.status(200).json(paymentMethod);
      } else {
        res.status(404).json({ error: 'PaymentMethod not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE PaymentMethod by ID
  exports.deletePaymentMethod= async (req, res) => {
    try {
      const paymentMethod = await PaymentMethod.findByPk(req.params.id);
      if (paymentMethod) {
        await paymentMethod.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'PaymentMethod not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


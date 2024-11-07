// routes/payment.js
const Payment = require('../models/Payment'); // Adjust the path to your model
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Payment
exports.createPayment= async (req, res) => {
    try {
      const payment = await Payment.create(req.body);
      res.status(201).json(payment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Payments
  exports.getPayments= async (req, res) => {
    try {
      const payments = await Payment.findAll();
      res.status(200).json(payments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Payment by ID
  exports.getPayment= async (req, res) => {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (payment) {
        res.status(200).json(payment);
      } else {
        res.status(404).json({ error: 'Payment not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Payment by ID
  exports.updatePayment= async (req, res) => {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (payment) {
        await payment.update(req.body);
        res.status(200).json(payment);
      } else {
        res.status(404).json({ error: 'Payment not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Payment by ID
  exports.deletePayment= async (req, res) => {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (payment) {
        await payment.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Payment not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


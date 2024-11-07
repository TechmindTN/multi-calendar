
// models/Payment.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Company = require('./Company'); // Import the Payment model
const PaymentMethod = require('./PaymentMethod');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: DataTypes.STRING,
  // birthday: DataTypes.DATE,
  created: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  

}, {
  tableName: 'Payment',
  timestamps: false
});

// Payment.hasOne(Payment);
// Payment.hasMany(Payment, { foreignKey: 'id_payment', as: 'payment' });
// Employee.belongsTo(Payment, { foreignKey: 'payment_id', as: 'payment' });
Payment.belongsTo(Company, { foreignKey: 'id_company', as: 'company' });
Payment.belongsTo(PaymentMethod, { foreignKey: 'id_payment_method', as: 'paymentMethod' });
module.exports = Payment;

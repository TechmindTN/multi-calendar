// models/PaymentMethod.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Employee = require('./PaymentMethod'); // Import the PaymentMethod model

const PaymentMethod = sequelize.define('PaymentMethod', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
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
  tableName: 'PaymentMethod',
  timestamps: false
});

// PaymentMethod.hasOne(PaymentMethod);
// PaymentMethod.hasMany(PaymentMethod, { foreignKey: 'id_paymentMethod', as: 'paymentMethod' });
// Employee.belongsTo(PaymentMethod, { foreignKey: 'paymentMethod_id', as: 'paymentMethod' });

module.exports = PaymentMethod;

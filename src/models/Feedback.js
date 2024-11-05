// models/Feedback.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const User = require('./User'); // Import the Feedback model

const Feedback = sequelize.define('Feedback', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  description: DataTypes.STRING,
  status: DataTypes.STRING,
  priority: DataTypes.STRING,
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
  tableName: 'Feedback',
  timestamps: false
});

// Feedback.hasOne(Feedback);
// Feedback.hasMany(Feedback, { foreignKey: 'id_feedback', as: 'feedback' });
// Employee.belongsTo(Feedback, { foreignKey: 'feedback_id', as: 'feedback' });
Feedback.belongsTo(User, { foreignKey: 'id_user', as: 'user' });

module.exports = Feedback;

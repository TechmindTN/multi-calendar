// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  birthday: DataTypes.DATE,
  created: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  access_token: DataTypes.STRING,
  refresh_token: DataTypes.STRING
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;

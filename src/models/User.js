// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Role = require('./Role'); // Import the Role model
const Company = require('./Company'); // Import the Role model


const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type:DataTypes.STRING,
    allowNull:false
  },
  provider: DataTypes.STRING,
  password: {
    type:DataTypes.STRING,
    allowNull:false

  },
  // birthday: DataTypes.DATE,
  created: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  last_login: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  access_token: DataTypes.STRING,
  refresh_token: DataTypes.STRING
}, {
  tableName: 'User',
  timestamps: false
});

// Role.hasMany(User, { foreignKey: 'id_role', as: 'role' });
// Role.hasMany(User, { foreignKey: 'id_role', as: 'role' });
User.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });
User.belongsTo(Company, { foreignKey: 'id_company', as: 'company' });
module.exports = User;

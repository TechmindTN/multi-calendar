// models/Role.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Employee = require('./Role'); // Import the Role model

const Role = sequelize.define('Role', {
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
  tableName: 'Role',
  timestamps: false
});

// Role.hasOne(Role);
// Role.hasMany(Role, { foreignKey: 'id_role', as: 'role' });
// Employee.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });

module.exports = Role;

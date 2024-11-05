// models/Department.js
const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Employee = require('./Employee'); // Import the Employee model

const Department = sequelize.define('Department', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Departments', // Table name in the database
  timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` fields
});
// Department.hasMany(Department, { foreignKey: 'department_id', as: 'employee' });

module.exports = Department;

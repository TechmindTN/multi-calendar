// models/Task.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const User = require('./User');
const Project = require('./Project');
const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  attachement: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priority: {
    type: DataTypes.STRING,
    // defaultValue: 1
  },
  duration: {
    type: DataTypes.INTEGER,
    // allowNull: false
  },
  order: {
    type: DataTypes.INTEGER,
    // allowNull: false
  },
  
  
  start_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Tasks', // Table name in the database
  timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` fields
});
Task.belongsTo(User, { foreignKey: 'id_created_by', as: 'created_by' });
Task.belongsTo(User, { foreignKey: 'id_assigned_to', as: 'assigned_to' });
Task.belongsTo(Project, { foreignKey: 'id_project', as: 'project' });
module.exports = Task;

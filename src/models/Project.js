// models/Project.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duration: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  client: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
//   id_duration_type: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'DurationType', // Make sure this matches your Department table name
//       key: 'id',
//     },
//   },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  starting_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,

  },
  deadline: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  
}, {
  tableName: 'Projects', // Table name in the database
  timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` fields
});

module.exports = Project;

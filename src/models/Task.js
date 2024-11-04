// // models/Task.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');  // Import the Sequelize instance

// const Task = sequelize.define('Task', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   color: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   priority: {
//     type: DataTypes.INTEGER,
//     defaultValue: 1
//   },
//   duration: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
  
//   id_employee: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'Employees', // Make sure this matches your User table name in the database
//       key: 'id',
//     },
//   },
//   id_project: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'Departments', // Make sure this matches your Department table name
//       key: 'id',
//     },
//   },
//   created: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
// }, {
//   tableName: 'Tasks', // Table name in the database
//   timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` fields
// });

// module.exports = Task;

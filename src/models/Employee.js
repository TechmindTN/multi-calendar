// // models/Employee.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');  // Import the Sequelize instance
// // const User = require('./User');
// // const Department = require('./Department');

// const Employee = sequelize.define('Employee', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   // id_user: {
//   //   type: DataTypes.INTEGER,
//   //   allowNull: false,
//   //   references: {
//   //     model: 'users', // Make sure this matches your User table name in the database
//   //     key: 'id',
//   //   },
//   // },
//   // id_department: {
//   //   type: DataTypes.INTEGER,
//   //   allowNull: false,
//   //   references: {
//   //     model: 'Departments', // Make sure this matches your Department table name
//   //     key: 'id',
//   //   },
//   // },
//   created: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
// }, {
//   tableName: 'Employees', // Table name in the database
//   timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` fields
// });

// // Defining the association
// // Employee.hasOne(User);   // A User has one Employee
// // User.belongsTo(Employee); // An Employee belongs to a User
// // Employee.hasOne(Department);   // A User has one Employee
// // Department.belongsTo(Employee); // An Employee belongs to a User
// // Employee.belongsTo(User);

// module.exports = Employee;

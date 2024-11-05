// models/Employee.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const User = require('./User');
const Department = require('./Department');
const Schedule = require('./Schedule');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  zip_code: {
    type: DataTypes.STRING,
  },
  profile_photo: {
    type: DataTypes.STRING,
  },
  
  // id_user: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'users', // Make sure this matches your User table name in the database
  //     key: 'id',
  //   },
  // },
  // id_department: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'Departments', // Make sure this matches your Department table name
  //     key: 'id',
  //   },
  // },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  birthday: {
    type: DataTypes.DATE,
    // defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Employees', // Table name in the database
  timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` fields
});

// Defining the association
// Employee.hasOne(User);   // A User has one Employee
// User.belongsTo(Employee); // An Employee belongs to a User
// Employee.hasOne(Department);   // A User has one Employee
// Department.belongsTo(Employee); // An Employee belongs to a User
// Employee.belongsTo(User);
Employee.belongsTo(User, { foreignKey: 'id_user', as: 'user' });
Employee.belongsTo(Department, { foreignKey: 'id_department', as: 'department' });
Employee.belongsTo(Schedule, { foreignKey: 'id_schedule', as: 'schedule' });

module.exports = Employee;

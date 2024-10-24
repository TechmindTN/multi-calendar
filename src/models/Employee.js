// models/Employee.js
const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('your-database', 'your-username', 'your-password', {
//   host: '127.0.0.1',
//   dialect: 'postgres'
// });
const sequelize = require('./index');  // Import the Sequelize instance

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_user: DataTypes.INTEGER,
  id_department: DataTypes.INTEGER,
  name: DataTypes.STRING,
  created: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  tableName: 'employees',
  timestamps: false
});

// models/Employee.js
const User = require('./User');
Employee.belongsTo(User, { foreignKey: 'id_user' });


module.exports = Employee;

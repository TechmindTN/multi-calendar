// models/Schedule.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Employee = require('./Schedule'); // Import the Schedule model

const Schedule = sequelize.define('Schedule', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  start_time: DataTypes.DOUBLE,
  end_time: DataTypes.DOUBLE,
  work_days: DataTypes.STRING,
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
  tableName: 'Schedule',
  timestamps: false
});

// Schedule.hasOne(Schedule);
// Schedule.hasMany(Schedule, { foreignKey: 'id_schedule', as: 'schedule' });
// Employee.belongsTo(Schedule, { foreignKey: 'schedule_id', as: 'schedule' });

module.exports = Schedule;

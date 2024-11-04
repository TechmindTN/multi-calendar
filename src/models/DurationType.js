// // models/Duration.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');  // Import the Sequelize instance

// const DurationType = sequelize.define('DurationType', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   created: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
//   unit: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   count: {
//     type: DataTypes.INTEGER, // This is a virtual field, calculated from start and end time
//     // get() {
//     //   const startTime = this.getDataValue('start_time');
//     //   const endTime = this.getDataValue('end_time');
//     //   return Math.round((new Date(endTime) - new Date(startTime)) / 60000); // Duration in minutes
//     // },
//     // set(value) {
//     //   throw new Error('Do not try to set the `duration_minutes` value!'); // Protect from manual setting
//     // }
//   },
// }, {
//   tableName: 'DurationType', // Table name in the database
//   timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` fields
// });

// module.exports = DurationType;

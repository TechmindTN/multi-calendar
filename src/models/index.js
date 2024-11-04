// models/index.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
// Initialize Sequelize connection
const sequelize = new Sequelize(
  dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'postgres'
});

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  
module.exports = sequelize;

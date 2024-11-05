// app.js
const express = require('express');
const authRoutes = require('./routes/auth'); // Import the auth routes
const userRoutes = require('./routes/user'); 
const roleRoutes = require('./routes/role'); 
const noteRoutes = require('./routes/note'); 
const feedbackRoutes = require('./routes/feedback'); 

const privilegeRoutes = require('./routes/privilege'); 
const companyRoutes = require('./routes/Company'); 

const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee'); // Add employee routes
const scheduleRoutes = require('./routes/schedule'); // Add employee routes
const departmentRoutes = require('./routes/department'); // Add employee routes

// const projectRoutes = require('./routes/project'); // Add project routes
// const taskRoutes = require('./routes/task'); // Add task routes
const cors = require('cors');


// const departmentRoutes = require('./routes/department'); // Add department routes
// const durationTypeRoutes = require('./routes/durationType'); // Add durationType routes

const sequelize = require('./models/index')
const app = express();
app.use(bodyParser.json());

app.use(cors());


// Use the imported routes
app.use('/auth', authRoutes); // All /auth routes will be handled by authRoutes
app.use('/user', userRoutes); // All /user routes will be handled by userRoutes
app.use('/role', roleRoutes); // All /user routes will be handled by userRoutes
app.use('/privilege', privilegeRoutes); // All /user routes will be handled by userRoutes
app.use('/note', noteRoutes); // All /user routes will be handled by userRoutes
app.use('/feedback', feedbackRoutes); // All /user routes will be handled by userRoutes

app.use('/schedule', scheduleRoutes); // Employee routes
app.use('/company', companyRoutes); // Employee routes

app.use('/employee', employeeRoutes); // Employee routes
app.use('/department', departmentRoutes); // Department routes
// app.use('/durationType', durationTypeRoutes); // Department routes
// app.use('/project', projectRoutes); // Department routes
// app.use('/task', taskRoutes); // Department routes




 // Sync DB and Start Server
 const PORT = process.env.PORT || 3000;
 sequelize.sync().then(() => {
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
 });


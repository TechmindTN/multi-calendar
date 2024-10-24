// app.js
const express = require('express');
const authRoutes = require('./routes/auth'); // Import the auth routes
const userRoutes = require('./routes/user'); 
const bodyParser = require('body-parser');

const sequelize = require('./models/index')
const app = express();
app.use(bodyParser.json());


// Use the imported routes
app.use('/auth', authRoutes); // All /auth routes will be handled by authRoutes
app.use('/user', userRoutes); // All /user routes will be handled by userRoutes


 // Sync DB and Start Server
 const PORT = process.env.PORT || 3000;
 sequelize.sync().then(() => {
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
 });


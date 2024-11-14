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
const fieldRoutes = require('./routes/field'); // Add employee routes
const paymentMethodRoutes = require('./routes/paymentMethod'); // Add employee routes
const paymentRoutes = require('./routes/payment'); // Add employee routes

const projectRoutes = require('./routes/project'); // Add project routes
const taskRoutes = require('./routes/task'); // Add task routes
const commentRoutes = require('./routes/comment'); // Add task routes
const imageRoutes = require('./routes/image'); // Add task routes

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
app.use('/field', fieldRoutes); // Employee routes

app.use('/employee', employeeRoutes); // Employee routes
app.use('/department', departmentRoutes); // Department routes
app.use('/paymentMethod', paymentMethodRoutes); // Department routes
app.use('/payment', paymentRoutes); // Department routes

// app.use('/durationType', durationTypeRoutes); // Department routes
app.use('/project', projectRoutes); // Department routes
app.use('/task', taskRoutes); // Department routes
app.use('/comment', commentRoutes); // Department routes
app.use('/image', imageRoutes); // Department routes
const multer = require('multer');
const path = require('path');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where the files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to file name
  }
});
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection established successfully.');

//     // Sync all models with the database
//     await sequelize.sync({ alter: true });  // alter: true updates the tables
//     console.log('Database synchronized with model changes.');
//   } catch (error) {
//     console.error('Unable to sync database:', error);
//   } finally {
//     await sequelize.close();
//   }
// })();
// Set up the upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Limit to 2MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb('Error: Images only!');
    }
  }
});

// Endpoint to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  try {
    res.send({ message: 'Image uploaded successfully', file: req.file });
  } catch (error) {
    res.status(400).send({ message: 'Error uploading image', error });
  }
});

 // Sync DB and Start Server
 const PORT = process.env.PORT || 3000;
 sequelize.sync().then(() => {
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
 });


// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path to your model
// require('dotenv').config();

const router = express.Router();
const JWT_SECRET = 'salamou_3alaykom'
// process.env.JWT_SECRET;
// const app = express();
// app.use(express.json()); // To parse incoming JSON data
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Compare passwords
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Generate JWT
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
        expiresIn: '1h', // Token expiry
      });
  
      // Optional: Store token in the database (for access control)
      user.access_token = token;
      await user.save();
  
      // Return the token to the user
      res.json({
        message: 'Login successful',
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  });
  
 
  
  
  // Register Route
  router.post('/register', async (req, res) => {
    const { username, password, email, phone } = req.body;
  
    try {
      // Validate request data (basic validation)
      if (!username || !password || !email) {
        return res.status(400).json({ error: 'Username, password, and email are required' });
      }
  
      // Check if the username already exists
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
      }
  
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10
  
      // Create a new user
      const newUser = await User.create({
        username,
        password: hashedPassword, // Store the hashed password
        email,
        phone,
        // Other fields if required
      });
  
      // Return the newly created user (excluding the password for security reasons)
      res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
        message: 'User registered successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during registration' });
    }
  });


  module.exports = router;

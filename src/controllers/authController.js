// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');
const Employee = require('../models/Employee');
const Department = require('../models/Department');
const Company = require('../models/Company');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  const { username, password, email,phone } = req.body;
  // user=req.body;

  try {
    if (!username || !password || !email) {
      return res.status(400).json({ error: 'Username, password, and email are required' });
    }

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
    }
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already used' });
    }
    // if(!user.role){

    // }
    // const existingPhone = await User.findOne({ where: { phone } });
    // if (existingUser) {
    //   return res.status(400).json({ error: 'Phone already used' });
    // }
    id_role=req.body.role
    // role=Role.findOne({where:{id_role}})
    
    provider=req.body.provider
    company=req.body.id_company
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      phone,
      id_role,
      provider,
      company
    });

    res.status(201).json({
      newUser,
      // id: newUser.id,
      // username: newUser.username,
      // email: newUser.email,
      // phone: newUser.phone,
      // role: newUser.role,
      // provider: newUser.provider,
      // company: newUser.company,
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username },
       include: {
        model: Role,
      as: 'role', // Ensure this matches your alias in the association
      // attributes: ['id', 'position', 'department'], // Select only needed fields
      }
    });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: '1h',
    });

    user.access_token = token;
    await user.save();
    // console.log(user)
    user_id=user.id
    // console.log(user.role_id)
    if(user.role_id==3){
      const employee=await Employee.findOne({where:{id_user:user_id},
      include:{
        model:Department,
        as:'department'
      }
      })
      res.json({ message: 'Login successful' ,token ,user,employee});
    }
    
    else if(user.role_id==1){
      // console.log('aaaa')
      const company=await Company.findByPk(user.id_company)
      // console.log(company)
      res.json({ message: 'Login successful' ,token ,user,company});
    }
    else if(user.role_id==2){
      res.json({ message: 'Login successful' ,token ,user});
    }
    else{
      res.json({ message: 'Login successful' ,token ,user});
    }
    
    // res.json({ message: 'Login successful' ,token ,user});
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};

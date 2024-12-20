// routes/user.js
const User = require('../models/User'); // Adjust the path to your model
const Role = require('../models/Role'); // Adjust the path to your model
const Company = require('../models/Company');

// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE User
exports.createUser= async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Users
  exports.getUsers= async (req, res) => {
    try {
      // console.log(req.query.company)
      if(req.query.company){
        const users = await User.findAll(
          { 
            where:{
              id_company:req.query.company
            },
            include: [{
             model: Role,
           as: 'role', // Ensure this matches your alias in the association
           // attributes: ['id', 'position', 'department'], // Select only needed fields
           
           },
          {
            model:Company,
            as: 'company'
          }
          ]}
         );
         res.status(200).json(users);
      }
      else{
        const users = await User.findAll(
          {include: [{
            model: Role,
          as: 'role', // Ensure this matches your alias in the association
          // attributes: ['id', 'position', 'department'], // Select only needed fields
          
          },
         {
           model:Company,
           as: 'company'
         }
         ]}
         );
         res.status(200).json(users);
      }
      
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ User by ID
  exports.getUser= async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id,
        {
          include: [{
            model: Role,
          as: 'role', // Ensure this matches your alias in the association
          // attributes: ['id', 'position', 'department'], // Select only needed fields
          
          },
         {
           model:Company,
           as: 'company'
         }
         ]
        }
      );
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE User by ID
  exports.updateUser= async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      // const role = await User.findByPk(req.body.id);
      if (user) {
        await user.update(req.body);
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE User by ID
  exports.deleteUser= async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


// routes/task.js
const Project = require('../models/Project');
const Task = require('../models/Task'); // Adjust the path to your model
const User = require('../models/User');
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Task
exports.createTask= async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Tasks
  exports.getTasks= async (req, res) => {
    try {
        if(req.query.project){
          const tasks = await Task.findAll(
            {
              attributes:["id",
            "title",
            "color",
            "description",
            "status",
            "attachement",
            "priority",
            "duration",
            "order",
            "start_date",
            "last_updated",
            "created"
          
          ],
          where:
            {
              id_project:req.query.project
            }
          ,
              include:[
                {
                  model: Project,
                  as:'project'
                },
                {
                  model:User,
                  as: 'created_by',
                },
                {
                  model:User,
                  as: 'assigned_to',
                }
              ]
            }
          );
          res.status(200).json(tasks);
        }
        else{
          const tasks = await Task.findAll(
            {
              attributes:["id",
            "title",
            "color",
            "description",
            "status",
            "attachement",
            "priority",
            "duration",
            "order",
            "start_date",
            "last_updated",
            "created"
          
          ],
          
          
              include:[
                {
                  model: Project,
                  as:'project'
                },
                {
                  model:User,
                  as: 'created_by',
                },
                {
                  model:User,
                  as: 'assigned_to',
                }
              ]
            }
          );
          res.status(200).json(tasks);
        }
      
     
      
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Task by ID
  exports.getTask= async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id,
        {
          include:[
            {
              model: Project,
              as:'project'
            },
            {
              model:User,
              as: 'created_by',
            },
            {
              model:User,
              as: 'assigned_to',
            }
          ]
        }
      );
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Task by ID
  exports.updateTask= async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (task) {
        await task.update(req.body);
        res.status(200).json(task);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Task by ID
  exports.deleteTask= async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (task) {
        await task.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


// routes/comment.js
const Comment = require('../models/Comment'); // Adjust the path to your model
const Task = require('../models/Task');
// const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

// const app = express();
// app.use(express.json()); // To parse incoming JSON data
// CREATE Comment
exports.createComment= async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
      res.status(201).json(comment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ all Comments
  exports.getComments= async (req, res) => {
    try {
      if(req.query.task){
        const comments = await Comment.findAll(
          {
            attributes:["id",
        "title",
        "description",
        "status",
        "attachement",
        "created",
        "last_updated"],
            where:{id_task:req.query.task},
            include:[
              {
                model:Task,
                as:'task'
              }
            ]
          }
        );
        res.status(200).json(comments);
      }
      else{
        const comments = await Comment.findAll(
          {
            attributes:["id",
        "title",
        "description",
        "status",
        "attachement",
        "created",
        "last_updated"],
            include:[
              {
                model:Task,
                as:'task',
                
              }
            ]
          }
        );
        res.status(200).json(comments);
      }
      
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // READ Comment by ID
  exports.getComment= async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id,{
        include:[
          {
            model:Task,
            as:'task',
            
          }
        ]
      });
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // UPDATE Comment by ID
  exports.updateComment= async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (comment) {
        await comment.update(req.body);
        res.status(200).json(comment);
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // DELETE Comment by ID
  exports.deleteComment= async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (comment) {
        await comment.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


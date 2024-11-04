// // controllers/taskController.js
// const Task = require('../models/Task');
// const Employee = require('../models/Employee');
// const Project = require('../models/Project');

// // Create a new task
// exports.createTask = async (req, res) => {
//   const { name, id_user, id_department } = req.body;

//   try {
//     // Make sure the user and department exist
//     const user = await User.findByPk(id_user);
//     const department = await Department.findByPk(id_department);

//     if (!user || !department) {
//       return res.status(400).json({ error: 'Invalid user or department' });
//     }

//     // Create the task record
//     const task = await Task.create({
//       name,
//       id_user,
//       id_department,
//     });

//     res.status(201).json({
//       message: 'Task created successfully',
//       task,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the task' });
//   }
// };

// // Get all tasks
// exports.getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.findAll({
//       include: [
//         { model: Employee, as: 'employee', attributes: ['name'] },
//         { model: Project, as: 'project', attributes: ['title'] },
//       ],
//     });
//     res.json(tasks);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching tasks' });
//   }
// };

// // Get a single task by ID
// exports.getTaskById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const task = await Task.findByPk(id, {
//       include: [
//         { model: Employee, as: 'employee', attributes: ['name'] },
//         { model: Project, as: 'project', attributes: ['title'] },
//       ],
//     });

//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' });
//     }

//     res.json(task);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching the task' });
//   }
// };

// // Update an task
// exports.updateTask = async (req, res) => {
//   const { id } = req.params;
//   const { name, id_user, id_department } = req.body;

//   try {
//     const task = await Task.findByPk(id);

//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' });
//     }

//     task.name = name || task.name;
//     task.id_user = id_user || task.id_user;
//     task.id_department = id_department || task.id_department;

//     await task.save();
//     res.json({ message: 'Task updated successfully', task });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while updating the task' });
//   }
// };

// // Delete an task
// exports.deleteTask = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const task = await Task.findByPk(id);

//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' });
//     }

//     await task.destroy();
//     res.json({ message: 'Task deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while deleting the task' });
//   }
// };

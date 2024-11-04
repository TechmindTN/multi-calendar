// // controllers/projectController.js
// const Project = require('../models/Project');
// const User = require('../models/User');
// const Department = require('../models/Department');
// const DurationType = require('../models/DurationType');

// // Create a new project
// exports.createProject = async (req, res) => {
//   const { title,
//     description,
//     status,
//     duration,
//     id_duration_type,
//     color,
//     starting_date,
//     deadline  } = req.body;

//   try {
//     // Make sure the user and department exist
//     // const user = await User.findByPk(id_user);
//     const durationType = await DurationType.findByPk(id_duration_type);

//     // if ( !department) {
//     //   return res.status(400).json({ error: 'Invalid user or department' });
//     // }

//     // Create the project record
//     const project = await Project.create({
//       title,
//       description,
//       status,
//       duration,
//       id_duration_type,
//       color,
//       starting_date,
//       deadline
   
//     });

//     res.status(201).json({
//       message: 'Project created successfully',
//       project,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the project' });
//   }
// };

// // Get all projects
// exports.getAllProjects = async (req, res) => {
//   try {
//     const projects = await Project.findAll({
//       include: [
//         // { model: User, as: 'user', attributes: ['username', 'email'] },
//         { model: DurationType, as: 'durationType', attributes: ['unit'] },
//       ],
//     });
//     res.json(projects);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching projects' });
//   }
// };

// // Get a single project by ID
// exports.getProjectById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const project = await Project.findByPk(id, {
//       include: [
//         // { model: User, as: 'user', attributes: ['username', 'email'] },
//         { model: DurationType, as: 'durationType', attributes: ['unit'] },
//       ],
//     });

//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }

//     res.json(project);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching the project' });
//   }
// };

// // Update an project
// exports.updateProject = async (req, res) => {
//   const { id } = req.params;
//   const {  title,
//     description,
//     status,
//     duration,
//     id_duration_type,
//     color,
//     starting_date,
//     deadline } = req.body;

//   try {
//     const project = await Project.findByPk(id);

//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }

//     project.title=title||project.title,
//     project.description=description||project.description,
//     project.status=status||project.status,
//     project.duration=duration||project.duration,
//     project.id_duration_type=id_duration_type||project.id_duration_type,
//     project.color=color||project.color,
//     project.starting_date=starting_date||project.starting_date,
//     project.deadline=deadline||project.deadline,
   

//     // project.name = name || project.name;
//     // project.id_user = id_user || project.id_user;
//     // project.id_department = id_department || project.id_department;

//     await project.save();
//     res.json({ message: 'Project updated successfully', project });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while updating the project' });
//   }
// };

// // Delete an project
// exports.deleteProject = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const project = await Project.findByPk(id);

//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }

//     await project.destroy();
//     res.json({ message: 'Project deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while deleting the project' });
//   }
// };

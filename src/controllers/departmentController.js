// // controllers/departmentController.js
// const Department = require('../models/Department');

// // Create a new department
// exports.createDepartment = async (req, res) => {
//   const { name, description } = req.body;

//   try {
//     const department = await Department.create({
//       name,
//       description,
//     });

//     res.status(201).json({
//       message: 'Department created successfully',
//       department,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the department' });
//   }
// };

// // Get all departments
// exports.getAllDepartments = async (req, res) => {
//   try {
//     const departments = await Department.findAll();
//     res.json(departments);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching departments' });
//   }
// };

// // Get a single department by ID
// exports.getDepartmentById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const department = await Department.findByPk(id);

//     if (!department) {
//       return res.status(404).json({ error: 'Department not found' });
//     }

//     res.json(department);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching the department' });
//   }
// };

// // Update a department
// exports.updateDepartment = async (req, res) => {
//   const { id } = req.params;
//   const { name, description } = req.body;

//   try {
//     const department = await Department.findByPk(id);

//     if (!department) {
//       return res.status(404).json({ error: 'Department not found' });
//     }

//     department.name = name || department.name;
//     department.description = description || department.description;

//     await department.save();
//     res.json({ message: 'Department updated successfully', department });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while updating the department' });
//   }
// };

// // Delete a department
// exports.deleteDepartment = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const department = await Department.findByPk(id);

//     if (!department) {
//       return res.status(404).json({ error: 'Department not found' });
//     }

//     await department.destroy();
//     res.json({ message: 'Department deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while deleting the department' });
//   }
// };

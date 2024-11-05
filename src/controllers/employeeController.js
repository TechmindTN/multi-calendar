// controllers/employeeController.js
const Employee = require('../models/Employee');
const User = require('../models/User');
const Department = require('../models/Department');

// Create a new employee
exports.createEmployee = async (req, res) => {
  const { name, user_id, id_department } = req.body;

  try {
    // Make sure the user and department exist
    const user = await User.findByPk(user_id);
    // const department = await Department.findByPk(id_department);

    if (!user
      //  || 
      // !department
    ) {
      return res.status(400).json({ error: 'Invalid user or department' });
    }

    // Create the employee record
    const employee = await Employee.create({
      name,
      user_id,
      // id_department,
    });

    res.status(201).json({
      message: 'Employee created successfully',
      employee,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the employee' });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [
        // { model: User, as: 'user' },
        { model: User, as: 'user', attributes: ['username', 'email'] },
        // { model: Department, as: 'id_department', attributes: ['name'] },
      ],
    });
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching employees' });
  }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: ['username', 'email'] },
        // { model: Department, as: 'department', attributes: ['name'] },
      ],
    });

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the employee' });
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, user_id } = req.body;

  try {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    employee.name = name || employee.name;
    employee.user_id = user_id || employee.user_id;
    // employee.id_department = id_department || employee.id_department;

    await employee.save();
    res.json({ message: 'Employee updated successfully', employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the employee' });
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    await employee.destroy();
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the employee' });
  }
};

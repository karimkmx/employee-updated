import employeeService from '../services/employeeService.js';

// Get all employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new employee
export const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    const newEmployee = await employeeService.createEmployee(firstName, lastName, age);
    res.json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an employee
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    console.log(req.params);
    console.log("-------");
    console.log(req.body);
    const updatedEmployee = await employeeService.updateEmployee(id, firstName, lastName, age);
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete an employee
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await employeeService.deleteEmployee(id);
    res.json(deletedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};

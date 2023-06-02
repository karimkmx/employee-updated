import Employee from '../models/employee.js';

// Get all employees
const getAllEmployees = () => {
  return Employee.findEmployees();
};

// Create a new employee
const createEmployee = (firstName, lastName, age) => {
  return Employee.createEmployee(firstName, lastName, age);
};

// Update an employee
const updateEmployee = (id, firstName, lastName, age) => {
  const updatedData = { firstName, lastName, age };
  return Employee.findByIdAndUpdateEmployee(id, updatedData);
};

// Delete an employee
const deleteEmployee = (id) => {
  return Employee.findByIdAndDelete(id).exec();
};

export default {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
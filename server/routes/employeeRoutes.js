import { Router } from 'express';
import { getAllEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employeeController.js';
import { validateEmployeeInput } from '../validations/employeeValidations.js';

const router = Router();

// Get all employees
router.get('/employees', getAllEmployees);

// Create a new employee
router.post('/employees', validateEmployeeInput, createEmployee);

// Update an employee
router.put('/employees/:id', validateEmployeeInput, updateEmployee);

// Delete an employee
router.delete('/employees/:id', deleteEmployee);

export default router;
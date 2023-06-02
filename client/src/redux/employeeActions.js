import {
    CREATE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    FETCH_EMPLOYEES,
  } from '../types/employeeTypes';
  import apiService from '../services/apiService';
  
  // Action creator for creating an employee
  export const createEmployee = (employeeData) => async (dispatch) => {
    try {
      const newEmployee = await apiService.createEmployee(employeeData);
      dispatch({ type: CREATE_EMPLOYEE, payload: newEmployee });
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  
  // Action creator for updating an employee
  export const updateEmployee = (employeeId, employeeData) => async (dispatch) => {
    try {
      const updatedEmployee = await apiService.updateEmployee(employeeId, employeeData);
      dispatch({ type: UPDATE_EMPLOYEE, payload: updatedEmployee });
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  
  // Action creator for deleting an employee
  export const deleteEmployee = (employeeId) => async (dispatch) => {
    try {
      await apiService.deleteEmployee(employeeId);
      dispatch({ type: DELETE_EMPLOYEE, payload: employeeId });
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

 // Action creator for fetching all employees
export const fetchEmployees = () => async (dispatch) => {
    try {
      const employees = await apiService.getAllEmployees();
      dispatch({
        type: FETCH_EMPLOYEES,
        payload: {
          data: employees, // Assign the fetched data to 'data' field
          loading: false, // Set loading to false
          error: null, // Set error to null
        },
      });
    } catch (error) {
      // Handle error
      console.error("Error fetching employees:", error);
      // Dispatch an error action or perform any necessary error handling
    }
  };
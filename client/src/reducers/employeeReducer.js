import { CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE, FETCH_EMPLOYEES } from '../types/employeeTypes';

const initialState = {
    employees: [],
    loading: false, // Add loading field to the initial state
    error: null, // Add error field to the initial state
  };
  
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee._id === action.payload._id ? action.payload : employee
        ),
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((employee) => employee._id !== action.payload),
      };
      case FETCH_EMPLOYEES:
        console.log('Current state:', state); // Log the current state
        console.log('Action payload:', action.payload); // Log the action payload
        return {
          ...state,
          employees: action.payload.data || state.employees, // Use the data from the payload if available, otherwise use the existing state
          loading: action.payload.loading || false, // Update the loading state
          error: action.payload.error || null, // Update the error state
        };
    default:
      return state;
  }
};

export default employeeReducer;

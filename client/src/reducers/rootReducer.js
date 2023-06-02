import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  employeesReducer: employeeReducer,
  // Add more reducers here if needed
});

export default rootReducer;

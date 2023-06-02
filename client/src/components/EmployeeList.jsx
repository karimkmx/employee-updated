import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeePopupForm from './EmployeePopupForm';
import { fetchEmployees, deleteEmployee } from '../redux/employeeActions';
import EmployeeTable from './EmployeeTable';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeesReducer.employees);
  const loading = useSelector((state) => state.loading);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const handleAddEmployee = (employee) => {
    console.log('Adding employee:', employee);
    dispatch(fetchEmployees());
  };

  const handleEditEmployee = (employee) => {
    setEmployeeToEdit(employee);
    setShowAddPopup(true);
  };

  const handleDeleteEmployee = (employee) => {
    dispatch(deleteEmployee(employee._id));
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="employee-table">
        <h2>Employees</h2>
        <button className="add-btn" onClick={() => setShowAddPopup(true)}>
          Add Employee
        </button>
        {showAddPopup && (
          <EmployeePopupForm
            onClose={() => {
              setShowAddPopup(false);
              setEmployeeToEdit(null);
            }}
            onSave={handleAddEmployee}
            employeeToEdit={employeeToEdit}
          />
        )}
        <p>Employees: {employees.length}</p>
        <hr />
        <EmployeeTable
          employees={employees}
          onEditEmployee={handleEditEmployee}
          onDeleteEmployee={handleDeleteEmployee}
        />
      </div>
    </div>
  );
};

export default EmployeeList;

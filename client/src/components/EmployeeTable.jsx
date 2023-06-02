import React from 'react';

const EmployeeTable = ({ employees, onEditEmployee, onDeleteEmployee }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="6">No employees found</td>
          </tr>
        ) : (
          employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee._id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.age}</td>
              <td>
                <button onClick={() => onEditEmployee(employee)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDeleteEmployee(employee)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createEmployee, updateEmployee } from '../redux/employeeActions';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  age: Yup.number()
  .required('Age is required')
  .positive('Age must be a positive number')
  .integer('Age must be an integer')
  .min(18, 'Age must be at least 18'),});

function EmployeePopupForm({ onClose, employeeToEdit }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: employeeToEdit ? employeeToEdit.firstName : '',
      lastName: employeeToEdit ? employeeToEdit.lastName : '',
      age: employeeToEdit ? employeeToEdit.age : '',
    },
    validationSchema,
    onSubmit: values => {
      if (employeeToEdit) {
        const updatedEmployee = { ...employeeToEdit, ...values };
        dispatch(updateEmployee(updatedEmployee._id, updatedEmployee));
      } else {
        dispatch(createEmployee(values));
      }
      onClose();
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, [employeeToEdit]);

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{employeeToEdit ? 'Edit Employee' : 'Add Employee'}</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              {...formik.getFieldProps('age')}
            />
            {formik.touched.age && formik.errors.age && (
              <div className="error">{formik.errors.age}</div>
            )}
          </div>
          <div className="buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">
              {employeeToEdit ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeePopupForm;

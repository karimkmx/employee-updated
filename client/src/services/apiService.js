import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your actual backend URL

const apiService = {
  // Function to fetch all employees
  async getAllEmployees() {
    try {
      const response = await axios.get(`${BASE_URL}/employees`);
      console.log("Employees: get()");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  },

  // Function to create a new employee
  async createEmployee(employee) {
    try {
      const response = await axios.post(`${BASE_URL}/employees`, employee);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  },

  // Function to update an employee
  async updateEmployee(id, employee) {
    try {
      console.log("ID");
      console.log(id);
      const response = await axios.put(`${BASE_URL}/employees/${id}`, employee);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  },

  // Function to delete an employee
  async deleteEmployee(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/employees/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

export default apiService;

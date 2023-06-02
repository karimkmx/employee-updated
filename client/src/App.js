import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Layout";
import './styles/styles.css';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
   
  );
}

export default App;

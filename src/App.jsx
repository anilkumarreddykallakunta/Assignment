import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentListPage from './pages/StudentListPage';
import SummaryPage from './pages/SummaryPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Student Attendance Dashboard</h1>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<StudentListPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          {/* Default route redirects to the login page */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
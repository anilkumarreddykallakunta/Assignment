// src/pages/SummaryPage.jsx

import React from 'react';
// Make sure useLocation and useNavigate are imported from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import ChartWrapper from '../components/ChartWrapper';
import { mockAttendanceSummary } from '../data/mockData';
import Button from '../components/Button';

const SummaryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const attendanceData = location.state?.summaryData || mockAttendanceSummary;

  // New function to handle logging out
  const handleLogout = () => {
    // Navigate back to the login page
    navigate('/login');
  };

  return (
    <div className="page-container">
      <ChartWrapper data={attendanceData} title="Class Attendance Summary" />
      <div className="button-container">
        <Button onClick={() => navigate('/dashboard')}>Mark New Attendance</Button>
        {/* Add the new Logout button */}
        <Button onClick={handleLogout} className="button-logout">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SummaryPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchStudents, submitAttendance } from '../services/api';
import AttendanceToggle from '../components/AttendanceToggle';
import Button from '../components/Button';
import Card from '../components/Card';

// The page to display the student list and mark attendance[cite: 14].
const StudentListPage = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const navigate = useNavigate();

  // The useEffect hook is used to fetch data when the page loads[cite: 6].
  useEffect(() => {
    const getStudents = async () => {
      // Fetching student list from the simulated API[cite: 14].
      const studentData = await fetchStudents();
      setStudents(studentData);

      // Initialize attendance state with all students marked as 'Present'.
      const initialAttendance = studentData.reduce((acc, student) => {
        acc[student.id] = 'Present';
        return acc;
      }, {});
      setAttendance(initialAttendance);
    };
    getStudents();
  }, []);

  // The useState hook is used for state management[cite: 6].
  const handleToggle = (studentId, status) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = async () => {
    await submitAttendance(attendance);
    alert('Attendance submitted!');
    navigate('/summary'); // Navigate to summary page after submission
  };

  return (
    <div className="page-container">
      <Card title="Mark Student Attendance">
        <div className="student-list">
          {students.map((student) => (
            <div key={student.id} className="student-row">
              <span className="student-name">{student.name}</span>
              {/* Using the reusable toggle component for each student [cite: 14] */}
              <AttendanceToggle
                status={attendance[student.id]}
                onToggle={(status) => handleToggle(student.id, status)}
              />
            </div>
          ))}
        </div>
        <Button onClick={handleSubmit}>Submit Attendance</Button>
      </Card>
    </div>
  );
};

export default StudentListPage;
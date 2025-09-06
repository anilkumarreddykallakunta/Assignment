import { mockStudents } from '../data/mockData';

// This service simulates the REST API calls required by the task[cite: 15, 23].

/**
 * Simulates the GET /api/students endpoint to fetch the student list[cite: 15].
 * @returns {Promise<Array>} A promise that resolves with the student list.
 */
export const fetchStudents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStudents);
    }, 500); // Simulate a 0.5-second network delay
  });
};

/**
 * Simulates the POST /api/attendance endpoint to submit attendance[cite: 15].
 * @param {Object} attendanceData - The attendance data for all students.
 * @returns {Promise<Object>} A promise resolving with a success message.
 */
export const submitAttendance = (attendanceData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real MERN app, this would be a fetch() call to your Express backend.
      console.log('Submitted Attendance Data:', attendanceData);
      resolve({ success: true, message: 'Attendance submitted successfully!' });
    }, 500);
  });
};
// This file holds the dummy data for the application.

// Dummy credentials for the login page as allowed by the requirements[cite: 13].
export const mockCredentials = {
  email: 'teacher@school.com',
  password: 'password123',
};

// A mock list of students that would normally come from the backend.
export const mockStudents = [
  { id: 1, name: 'Aarav Sharma' },
  { id: 2, name: 'Diya Patel' },
  { id: 3, name: 'Rohan Mehta' },
  { id: 4, name: 'Saanvi Gupta' },
  { id: 5, name: 'Vihaan Singh' },
  { id: 6, name: 'Anika Reddy' },
];

// Mock data for the attendance summary chart[cite: 16].
export const mockAttendanceSummary = [
    { name: 'Present', value: 83, fill: '#4CAF50' },
    { name: 'Absent', value: 17, fill: '#F44336' },
];
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import { mockCredentials } from '../data/mockData';

// The Login Page component as required[cite: 13].
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle login using dummy credentials[cite: 13].
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === mockCredentials.email && password === mockCredentials.password) {
      navigate('/dashboard'); // Navigate to dashboard on successful login
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="page-container">
      <Card title="Teacher Login">
        <form onSubmit={handleLogin}>
          {/* Using reusable form components [cite: 13] */}
          <Input
            label="Email"
            type="email"
            placeholder="teacher@school.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="password123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
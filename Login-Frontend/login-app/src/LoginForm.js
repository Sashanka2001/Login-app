import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login page  </h2>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
} 

export default LoginForm;

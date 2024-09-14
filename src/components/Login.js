import './LoginRegister.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {

  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validCredentials = {
    username: 'kani',
    password: 'kani1',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    // Validate credentials
    if (username === validCredentials.username && password === validCredentials.password) {
      setIsLoggedIn(true);
      setErrorMessage('');
      alert('WELCOME USER')
      nav('/home') // Clear any previous errors
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username" />
          </label>
          <label>
            Password:
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password" />
          </label>
          <button type="submit">Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>

      </div>
    </div>

  );

};


export default Login;
import './LoginRegister.css';
import React, { useState } from 'react';

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);


  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!username || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
      return;
    }
  // Validate if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    // Proceed with registration
    setIsRegistered(true);
    setErrorMessage('');
    alert('Registration Successful!');
    alert('-Your Account will be in Live Once verfied-🌐');

  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>
            Username:
            <input type="text" value={username}
        onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)} />
          </label>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
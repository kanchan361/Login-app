import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock login logic
    if (username === 'user' && password === 'password') {
      setNotification('Login successful!');
    } else {
      setNotification('Login failed. Please check your credentials.');
    }

    // Clear inputs
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      {notification && <p>{notification}</p>}
    </div>
  );
};

export default LoginPage;

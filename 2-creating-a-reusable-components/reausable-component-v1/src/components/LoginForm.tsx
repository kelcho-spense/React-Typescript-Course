import React, { useState } from 'react';
import InputField from './InputField';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password });
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <InputField
        label="Username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        icon={<FaUser />}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<FaLock />}
      />
      <button type="submit" style={{ padding: '10px 20px', marginTop: '20px' }}>Login</button>
    </form>
  );
};

export default LoginForm;
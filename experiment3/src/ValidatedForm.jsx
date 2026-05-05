import React, { useState } from 'react';

function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes('@')) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setError('Password must be at least 8 characters');
    } else {
      setError('');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" value={email} onChange={handleEmail} /><br/>
      <input type="password" value={password} onChange={handlePassword} /><br/>
    </div>
  );
}

export default ValidatedForm;

import './Login.css';
import React, { useContext, useState } from 'react';
// hooks
import useLogin from '../../hooks/useLogin';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isPending && (
        <button className='btn' type='submit'>
          login
        </button>
      )}
      {isPending && <button className='btn'>loading</button>}
      {error && <p>{error}</p>}
    </form>
  );
}

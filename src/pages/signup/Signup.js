// styles
import styles from './Signup.module.css';
import React from 'react';
import { useState } from 'react';
// hooks
import useSignup from '../../hooks/useSignup';
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { error, isPending, signup } = useSignup(email, password, displayName);
  function handleSubmit(e) {
    e.preventDefault();
    signup(email, password, displayName);
    setEmail('');
    setPassword('');
    setDisplayName('');
  }
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Signup</h2>
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
      <label>
        <span>displayName:</span>
        <input
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      {!isPending && (
        <button className='btn' type='submit'>
          signup
        </button>
      )}
      {isPending && (
        <button className='btn' disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

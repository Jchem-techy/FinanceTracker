import React from 'react';
import { useState } from 'react';
export default function TransactionForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, amount });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>
          <span>Transaction name:</span>
          <input
            type='text'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label htmlFor=''>
          <span> Amount ($):</span>
          <input
            type='number'
            required
            onChange={(e) => setName(e.target.value)}
            value={amount}
          />
        </label>
        <button type='submit'>Add Transaction</button>
      </form>
    </>
  );
}

import React, { useEffect } from 'react';
import { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { colRef } from '../../firebase/config';
export default function TransactionForm({ uid }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addDocument, response } = useFirestore(colRef);
  function handleSubmit(e) {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  }
  useEffect(() => {
    if (response.success) {
      setName('');
      setAmount('');
    }
  }, [response.success]);
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
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button type='submit'>Add Transaction</button>
      </form>
    </>
  );
}

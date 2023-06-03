import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import useCollection from '../../hooks/useCollection';
import TransactionList from './TransactionList';
import { colRef } from '../../firebase/config';
// styles
import './Home.css';
import TransactionForm from './TransactionForm';
export default function Home() {
  const { documents, error } = useCollection(colRef);
  const { user } = useAuthContext();
  return (
    <div className='container'>
      <div className='content'>
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className='sidebar'>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}

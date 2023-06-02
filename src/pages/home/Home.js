import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
// styles
import './Home.css';
import TransactionForm from './TransactionForm';
export default function Home() {
  const { user } = useAuthContext();
  return (
    <div className='container'>
      <div className='content'>transcation list</div>
      <div className='sidebar'>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}

import React from 'react';
// styles
import './Home.css';
import TransactionForm from './TransactionForm';
export default function Home() {
  return (
    <div className='container'>
      <div className='content'>transcation list</div>
      <div className='sidebar'>
        <TransactionForm />
      </div>
    </div>
  );
}

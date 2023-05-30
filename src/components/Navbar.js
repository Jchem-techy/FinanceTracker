import { Link } from 'react-router-dom';
import './Navbar.css';
import React from 'react';
import useLogout from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
export default function Navbar() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>myMoney</li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

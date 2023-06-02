import { Routes, Route } from 'react-router-dom';
//components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
function App() {
  const { authIsReady, user } = useAuthContext();
  console.log(2);
  return (
    <div className='App'>
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path='/login'
              element={user ? <Navigate to='/' /> : <Login />}
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
//components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const { authIsReady } = useAuthContext();
  return (
    <div className='App'>
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
export default function ProtectedRoute1({ Children }) {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to='/login' />;
  }
  return Children;
}

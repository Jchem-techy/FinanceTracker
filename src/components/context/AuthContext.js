import { createContext, useEffect, useReducer } from 'react';
import { auth } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();
export function authReducerFunc(state, action) {
  if (action.type === 'LOGIN') {
    return { ...state, user: action.payload };
  }
  if (action.type === 'LOGOUT') {
    return { ...state, user: null };
  }

  return state;
}

// the context provider wrapper so that a value or a state can be acessed by multiple components in the react application
export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducerFunc, {
    user: null,
    authIsReady: false,
  });
  console.log('AuthContextState:', state);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    });
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch, testing: 'johnson' }}>
      {children}
    </AuthContext.Provider>
  );
}

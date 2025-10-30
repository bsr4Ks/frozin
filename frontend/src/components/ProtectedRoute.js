// components/ProtectedRoute.js
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Home } from '../pages/Home';

export function ProtectedRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? children : <Home />;
}

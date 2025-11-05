import { createContext, useContext, useState, useEffect } from 'react';
import { fetcher } from '../utils/fetcher';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // o { id, name, token, ... }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchData();
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user) {
      setLoading(false);
    }
  }, [user]);

  const fetchData = async () => {
    try {
      const data = await fetcher('api/auth/me', { auth: true });
      setUser(data);
    } catch (err) {
      localStorage.removeItem('token');
      setUser(null);
      return <Navigate to="/login" replace />;
    }
  };

  const login = (userData) => {
    localStorage.setItem('token', userData.token);
    setUser(userData.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

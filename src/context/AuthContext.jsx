import { createContext, useContext, useState, useEffect } from "react";
import { fetcher } from "../utils/Fetcher";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // o { id, name, token, ... }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    const fetchData = async () => {
        try {
            const data = await fetcher('api/auth/me', {auth: true})
            setUser(data)
        }catch(err) {
            console.log(err.message)
            localStorage.removeItem("token");
            setUser(null);
            console.log("Token removido")
        }
    } 
    fetchData()
  } else {
    setLoading(false);
  }
}, []);

useEffect(() => {
  if (user) {
    console.log("Usuario establecido como:", user.name);
  } else {
    console.log("Usuario es null");
  }
}, [user]);

  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    setUser(userData.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    console.log("Token removido")
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);

  const handleLogin = (values) => {
    axios.post("http://challenge-react.alkemy.org/", values)
    .then((resp) => {
      setToken(resp.data.token);
      localStorage.setItem("token", JSON.stringify(token));
      setTimeout(() => {
        const origin = location.state?.from?.pathname || '/home';
        navigate(origin);
      }, 1500);
      
    })
    .catch(() => swal("Oops!", "Usuario o contraseña incorrectos - Intente de nuevo", "error"))
    
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, token }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;
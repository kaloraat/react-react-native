import { useState, useEffect, createContext } from "react";
import { getFromLocalStorage, removeFromLocalStorage } from "../helpers/auth";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // axios configuration
  axios.defaults.baseURL = process.env.REACT_APP_API;
  axios.defaults.headers.common["Authorization"] = `${auth?.token}`;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        setAuth(null);
        removeFromLocalStorage();
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    setAuth(getFromLocalStorage("auth"));
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

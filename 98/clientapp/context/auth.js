import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    loadFromAsyncStorage();
  }, []);

  const loadFromAsyncStorage = async () => {
    let data = await AsyncStorage.getItem("@auth");
    data = JSON.parse(data);
    // console.log("loaded_from_async_storage", data);
    setAuth({ ...auth, user: data.user, token: data.token });
  };

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

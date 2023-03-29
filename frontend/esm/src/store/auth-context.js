import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  isOffline: false,
  setOffline: () => {},
});
export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [admin, setAdmin] = useState("user");
  const [offlineStatus, setOfflineStatus] = useState(false);
  const userIsLoggedIn = !!token; // if token is not empty then it returns true

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const changeAdmin = (role) => {
    setAdmin(role);
    localStorage.setItem("admin", role);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
  };
  const setOffline = (status) => {
    setOfflineStatus(status);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    setOffline: setOffline,
    isOffline: offlineStatus,
    isAdmin: admin,
    changeAdmin: changeAdmin,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

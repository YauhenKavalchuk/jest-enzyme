import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, toggleLoginStatus] = useState(false);

  const toggleLogin = () => {
    toggleLoginStatus(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ toggleLogin, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { useState } from "react";

const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();

  const value = { login, setLogin, user, setUser };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;

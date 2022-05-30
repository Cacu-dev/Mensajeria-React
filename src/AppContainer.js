import React from "react";
import App from "./App";
import { LoginProvider } from "./context/loginContext";

const AppContainer = () => {
  return (
    <>
      <LoginProvider>
        <App />
      </LoginProvider>
    </>
  );
};

export default AppContainer;

import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [islogin, setIsLogin] = useState();
  return (
    <LoginContext.Provider value={{ islogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

const { createContext, useState, useContext } = require("react");

//!  1- Login Context'i Olusturuldu
export const LoginContext = createContext();

//! 2- Sarmalayici (Provider) Component
const LoginProvider = ({ children }) => {
  //! Local State
  const [user, setUser] = useState({ email: "", password: "" });
  const values = {
    user,
    setUser,
  };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//! 3- consuming custom hook
export const UseLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;

import { createContext, useState } from "react";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export const CurrentUserContextProvider = ({ children }) => {
    
  const [user, setUser] = useState();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("user_token"))
  );

  return (
    <CurrentUserContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

import { createContext, useState, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CurrentAdminContext = createContext();

export default CurrentAdminContext;

export function CurrentAdminContextProvider({ children }) {
  const [admin, setAdmin] = useState({});
  const [token, setToken] = useLocalStorage("token", "");

  return (
    <CurrentAdminContext.Provider value={{ admin, setAdmin, token, setToken }}>
      {children}
    </CurrentAdminContext.Provider>
  );
}

export const useCurrentAdminContext = () => useContext(CurrentAdminContext);

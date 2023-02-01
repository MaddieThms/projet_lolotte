import { createContext, useState, useContext, useEffect } from "react";

const CurrentAdminContext = createContext();

export default CurrentAdminContext;

export function CurrentAdminContextProvider({ children }) {
  const [admin, setAdmin] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/admin/bytoken`, requestOptions)
      .then((response) => response.json())
      .then((result) => setAdmin(result))
      .catch((error) => console.warn("error", error));
  }, []);

  return (
    <CurrentAdminContext.Provider value={{ admin, setAdmin, token }}>
      {children}
    </CurrentAdminContext.Provider>
  );
}

export const useCurrentAdminContext = () => useContext(CurrentAdminContext);

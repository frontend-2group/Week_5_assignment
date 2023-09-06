import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import GlobalStyles from "./styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <UserContext.Provider value={{ userName, setUserName }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;

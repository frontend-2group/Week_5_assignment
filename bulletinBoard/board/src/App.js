import GlobalStyles from "./styles/globalStyle";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { createContext, useState } from "react";

import LoginPage from "./Login";
import MainPage from "./MainPage";

// const UserContext = createContext();

function App() {
  // const [UserName, setUserName] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

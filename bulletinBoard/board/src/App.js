import GlobalStyles from "./styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import UserProvider from "./context/ctx";

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;

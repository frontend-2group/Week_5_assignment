import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";
import LoginPage from "../Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;

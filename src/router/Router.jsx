import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Options from "../pages/store/Options";
import Signup from "../components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/options",
        element: <Options />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Options from "../pages/store/Options";
import Signup from "../components/Signup";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
// import PrivateRouter from "../PrivateRoute/PrivateRouter";

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
        element: (
          // <PrivateRouter>
          <Options />
          // </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;

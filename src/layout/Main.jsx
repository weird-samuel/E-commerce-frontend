import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../components/Loader";
import { SnackbarProvider } from "notistack";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      <SnackbarProvider />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;

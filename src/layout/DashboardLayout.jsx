import { Link, Outlet } from "react-router-dom";
import {
  MdDashboard,
  MdDashboardCustomize,
  MdOutlineCategory,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import {
  FaBriefcase,
  FaEdit,
  FaLocationArrow,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
// logo

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to={"/"}>
        <IoHome />
        Home
      </Link>
    </li>
    <li>
      <Link to={"/options"}>
        <MdOutlineCategory />
        Options
      </Link>
    </li>
    <li>
      <Link to={"/order-tracking  "}>
        <FaLocationArrow />
        Order Tracking
      </Link>
    </li>
    <li>
      <Link to={"/customer-support"}>
        <MdOutlineSupportAgent />
        Customer Support
      </Link>
    </li>
  </>
);
const DashboardLayout = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Logged out successfully");
      })
      .catch((err) => {
        alert("Error" + err.message);
      });
  };
  return (
    <div>
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <MdDashboardCustomize />
            </label>
            <button
              className="btn btn-ghost rounded-full px-6 flex items-center gap-2 bg-base-200 sm:hidden"
              onClick={handleLogout}
            >
              <FaUser />
              Logout
            </button>
          </div>
          <div className="mt-5 md:mt-2 mx-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard"} className="flex justify-start mb-3">
                <img className="w-20" src={"logo"} />
                <span>
                  <div className="badge badge-primary badge-outline">Admin</div>
                </span>
              </Link>
            </li>
            <hr />
            <li className="mt-3">
              <Link to={"/dashboard"}>
                <MdDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={"/bookings"}>
                <FaBriefcase />
                Manage Bookings
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"}>
                <FaPlus />
                Add Option
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"}>
                <FaEdit />
                Manage Options
              </Link>
            </li>
            <li className="mb-3">
              <Link to={"/dashboard/users"}>
                <FaUsers />
                All Users
              </Link>
            </li>
            <hr />
            {/* shared links */}
            {sharedLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../AuthContext";
import "./nav.css";
import profile from "./istockphoto-2171382633-612x612.jpg";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🔹 Logout handler
  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out");
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="navbar bg-black text-white nav-main">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#F7F7FF] text-black rounded-box mt-3 w-52 p-2"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="about">Service</Link>
                </li>
                <li>
                  <Link to="profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          PET
        </Link>
      </div>

      {/* 💻 Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ul-for">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="about">Service</Link>
              </li>
              <li>
                <Link to="profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Avatar Section */}
      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar">
              <div className="w-12 rounded-full">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User Profile" />
                ) : (
                  <img src={profile} alt="Default Profile" />
                )}
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#F7F7FF] text-black rounded-box mt-3 w-52 p-2 shadow"
            >
              <li className="text-center font-semibold">
                {user.displayName || "User"}
              </li>
              <li>
                <Link to="profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;

import { AuthContext } from "../Context/AuthProvider";
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function NavBar() {
  const { logOut, user } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Topics</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Posts</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CHATTER</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About us</a>
          </li>
          <li>
            <details>
              <summary>Topics</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Posts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link
            className="btn"
            onClick={() => {
              logOut();
              toast.error("Logged out successfully!");

              Navigate("/");
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


export default function Header() {
  const { user, logOut } = useAuth();
  return (
    <div>
      <header className="text-gray-600 body-font text-center">
        <div className="container mx-auto flex flex-wrap justify-evenly p-5 flex-col md:flex-row items-center">
          <a className="md:w-1/3 w-full flex title-font md:justify-start justify-center font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">
              <Link to="/"> <img src="/logo.png" alt="Dhaka Travel Agency" /> </Link>
            </span>
          </a>
          <nav className="md:w-1/3 w-full md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/alltour" className="mr-5 hover:text-gray-900">
              All Tour
            </Link>
            <Link to="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link to="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
            {user.role && (
              <Link to="/addtour" className="mr-5 hover:text-gray-900">
                Add Tour
              </Link>
            )}
            {user.email && (
              <Link to="/orderlist" className="mr-5 hover:text-gray-900">
                Order List
              </Link>
            )}
          </nav>
          <div className="md:w-1/3 w-full md:flex md:justify-end md:left-0 md:items-center md:mx-auto md:py-3">
            <button className="mr-4 primary-btn  md:mt-0">
              <Link to="/profile">
                {user.displayName ? `${user.displayName}` : "Login"}{" "}
              </Link>
            </button>
            <button className="primary-btn">
              {user.displayName ? (
                <Link onClick={logOut} to="/login">
                  Logout
                </Link>
              ) : (
                <Link to="/admin">Admin</Link>
              )}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

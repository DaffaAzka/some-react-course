import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <NavLink
            className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
            to="#"
            aria-label="Brand">
            React Jobs
          </NavLink>
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-purple-500 focus:outline-hidden"
                  : "font-medium text-gray-100 focus:outline-hidden"
              }
              to="/"
              aria-current="page">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-purple-500 focus:outline-hidden"
                  : "font-medium text-gray-100 focus:outline-hidden"
              }
              to="/jobs">
              Jobs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-purple-500 focus:outline-hidden"
                  : "font-medium text-gray-100 focus:outline-hidden"
              }
              to="/add-job">
              Add Jobs
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

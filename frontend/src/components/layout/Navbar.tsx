import React, { type ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { project, pages } from "../../constants";
import Logo from "../common/Logo";

const Navbar = (): ReactElement => {
  return (
    <div className="min-h-[5rem] bg-green-900 text-white flex font-semibold px-4">
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <NavLink to="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Logo width={50} />
            <h1 className="text-3xl hover:text-gray-300">{project.name}</h1>
          </div>
        </NavLink>

        <div className="flex space-x-2 cursor-pointer p-4">
          {pages.map(
            (page) =>
              !page.requiresAuth && (
                <NavLink
                  key={page.name}
                  to={page.url}
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: "rgb(109 40 217)" }
                      : { backgroundColor: "transparent" }
                  }
                >
                  <p className="hover:text-white px-3 py-2 rounded-md">{page.name}</p>
                </NavLink>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

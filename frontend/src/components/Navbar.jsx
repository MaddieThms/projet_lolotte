import { Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.svg";
import closeMenu from "../assets/cross.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between px-6 md:px-14 py-4">
      {/* logo */}
      <NavLink to="/">
        <h2 className="text-main-black">
          projet <span className="text-main-green">.</span>lolotte
        </h2>
      </NavLink>

      <div className="flex flex-row">
        {/* menu burger */}
        <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? (
            <img
              src={menu}
              alt="ouvrir le menu"
              className="align-middle md:hidden"
            />
          ) : (
            <img
              src={closeMenu}
              className="h-[24px] w-[24px]"
              alt="Close menu"
            />
          )}
        </button>
        {menuOpen ? (
          <div className=" h-screen w-screen bg-slate-50 z-50">
            {/* active menu element */}
            <NavLink to="/grimpeurs">
              <h3 className="text-main-black hidden md:block">
                <span className="text-main-green">.</span>grimpeurs
              </h3>
            </NavLink>
            {/* Incoming menu elements, tooltip is used to announce those categories are incoming */}
            <Tooltip
              content="à venir"
              placement="bottom-end"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              className="text-main-green"
            >
              <h3 className="text-main-grey ml-6 hidden md:block">
                <span className="text-main-green">.</span>compétitions
              </h3>
            </Tooltip>
            <Tooltip
              content="à venir"
              placement="bottom-end"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              className="text-main-green"
            >
              <h3 className="text-main-grey ml-6 hidden md:block">
                <span className="text-main-green">.</span>les croix
              </h3>
            </Tooltip>
          </div>
        ) : (
          ""
        )}
        <ul className="flex flex-row">
          {/* active menu element */}
          <NavLink to="/grimpeurs">
            <li className="text-main-black hidden md:block text-2xl">
              <span className="text-main-green">.</span>grimpeurs
            </li>
          </NavLink>

          {/* Incoming menu element */}
          <Tooltip
            content="à venir"
            placement="bottom-end"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            className="text-main-green"
          >
            <li className="text-main-grey ml-6 hidden md:block text-2xl">
              <span className="text-main-green">.</span>compétitions
            </li>
          </Tooltip>
          <Tooltip
            content="à venir"
            placement="bottom-end"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            className="text-main-green"
          >
            <li className="text-main-grey ml-6 hidden md:block text-2xl">
              <span className="text-main-green">.</span>les croix
            </li>
          </Tooltip>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

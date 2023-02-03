import { Tooltip } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import menu from "../assets/menu.svg";
import closeMenu from "../assets/cross.svg";
import { useCurrentAdminContext } from "../context/AdminContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutIsConfirm, setLogoutIsConfirm] = useState(false);
  const { token, setAdmin } = useCurrentAdminContext();

  const navigate = useNavigate();

  const handleLogOut = () => {
    setLogoutIsConfirm(true);
  };

  useEffect(() => {
    if (logoutIsConfirm === true) {
      localStorage.removeItem("token");
      navigate("/");
      setAdmin({});
    } else {
      setLogoutIsConfirm(false);
    }
  }, [logoutIsConfirm]);

  return (
    <div className="flex justify-between px-6 md:px-14 py-4 relative">
      <div className="flex flex-col items-start">
        {/* logo */}
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <h2 className="text-main-black">
            projet <span className="text-main-green">.</span>lolotte
          </h2>
        </NavLink>
        {token ? (
          <button type="button" onClick={() => handleLogOut()}>
            Se déconnecter
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-row">
        {/* menu burger */}
        <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? (
            <img
              src={menu}
              alt="ouvrir le menu"
              className=" h-[36px] w-[36px] align-middle md:hidden"
            />
          ) : (
            <div className="absolute z-50 mr-6 right-0 flex flex-col items-end">
              <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
                <img
                  src={closeMenu}
                  className="h-[36px] w-[36px] md:hidden"
                  alt="Close menu"
                />
              </button>
              <ul className=" pt-4 ">
                <div>
                  {/* active menu element */}
                  <div className="bg-white rounded-lg border-2 border-main-green w-80">
                    <NavLink to="/grimpeurs">
                      <h3 className="text-main-black  md:hidden">
                        <span className="text-main-green">.</span>grimpeurs
                      </h3>
                    </NavLink>
                  </div>

                  {/* Incoming menu elements, tooltip is used to announce those categories are incoming */}
                  <div className="bg-white rounded-lg border-2 border-main-green mt-2 w-80">
                    <Tooltip
                      content="à venir"
                      placement="bottom-end"
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                      }}
                      className="text-main-green"
                    >
                      <h3 className="text-main-grey md:hidden">
                        <span className="text-main-green">.</span>compétitions
                      </h3>
                    </Tooltip>
                  </div>

                  <div className="bg-white rounded-lg border-2 border-main-green mt-2 w-80">
                    <Tooltip
                      content="à venir"
                      placement="bottom-end"
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                      }}
                      className="text-main-green"
                    >
                      <h3 className="text-main-grey md:hidden">
                        <span className="text-main-green">.</span>les croix
                      </h3>
                    </Tooltip>
                  </div>
                </div>
              </ul>
            </div>
          )}
        </button>

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
          <div>
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
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

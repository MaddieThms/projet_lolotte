import React from "react";
import { NavLink } from "react-router-dom";
import login from "../assets/login.svg";
import message from "../assets/message.svg";
import youtube from "../assets/youtube.svg";
import insta from "../assets/instagram.svg";
import { useCurrentAdminContext } from "../context/AdminContext";

function Footer() {
  const { token } = useCurrentAdminContext();
  return (
    <div className=" md:flex md:justify-center bottom-0 w-full hidden">
      <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-4 justify-around border-t border-main-green w-1/2 h-24 py-4">
        <p className="flex flex-row">
          <img src={youtube} alt="youtube" className="w-[24px] mr-2" /> Kayoo TV
        </p>
        <p className="flex flex-row">
          <img src={insta} alt="instagram" className="w-[24px] mr-2" />
          kayooescalade
        </p>
        <p className="flex flex-row">
          <img src={message} alt="message" className="w-[24px] mr-2" />
          Contact
        </p>
        {token ? (
          <NavLink to="/admin/grimpeurs">
            <p className="flex flex-row">
              <img
                src={login}
                alt="login pour le compte admin"
                className="w-[24px] mr-2"
              />{" "}
              Admin
            </p>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <p className="flex flex-row">
              <img
                src={login}
                alt="login pour le compte admin"
                className="w-[24px] mr-2"
              />{" "}
              Admin
            </p>
          </NavLink>
        )}

        <p className="text-main-grey">Mention Légales</p>
        <p className="text-main-grey">RGPD</p>
      </div>
    </div>
  );
}

export default Footer;

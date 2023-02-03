import React from "react";
import { NavLink } from "react-router-dom";

function Climber({ climber }) {
  return (
    <div>
      <li className="flex flex-col items-center mt-6 ">
        <NavLink to={`/grimpeurs/${climber.id}`} className="text-main-green ">
          <img
            src={`http://localhost:5000/picture/${climber.picture}`}
            alt={`${climber.firstname} ${climber.lastname}`}
            className=" rounded-full w-[170px] h-[170px] object-cover"
          />
          <h3 className="my-4 text-black">
            {climber.firstname} {climber.lastname}
          </h3>
        </NavLink>

        <div className="w-16 border-b border-main-green mb-6" />
      </li>
    </div>
  );
}

export default Climber;

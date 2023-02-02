import React, { useState } from "react";
import { useCurrentAdminContext } from "../context/AdminContext";
import EditClimber from "./EditClimber";
import ClimberDetails from "./ClimberDetails";

function Climber({ climber, setClimbers }) {
  const [openClimbersDetails, setOpenClimbersDetails] = useState(false);
  const [editClimbersDetails, setEditClimbersDetails] = useState(false);
  const { token } = useCurrentAdminContext();

  return (
    <div>
      <li className="flex flex-col items-center mt-6">
        {token ? (
          <div>
            <img
              src={climber.picture}
              alt={`${climber.firstname} ${climber.lastname}`}
              className="rounded-full w-[170px] h-[170px] object-cover"
            />
            <h3 className="my-4">
              {climber.firstname} {climber.lastname}
            </h3>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setOpenClimbersDetails(!openClimbersDetails)}
          >
            <img
              src={climber.picture}
              alt={`${climber.firstname} ${climber.lastname}`}
              className="rounded-full w-[170px] h-[170px] object-cover"
            />
            <h3 className="my-4">
              {climber.firstname} {climber.lastname}
            </h3>
          </button>
        )}

        {openClimbersDetails && !token ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 stroke-main-green"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <div className="w-16 border-b border-main-green mb-6" />
        )}
        {token ? (
          <div className="flex flex-col">
            <button
              type="button"
              className="text-main-green"
              onClick={() => setEditClimbersDetails(!editClimbersDetails)}
            >
              Editer
            </button>
            <button type="button" className="text-red-600">
              Supprimer
            </button>
          </div>
        ) : (
          ""
        )}
      </li>
      {openClimbersDetails && !token ? (
        <ClimberDetails climber={climber} />
      ) : (
        ""
      )}
      {editClimbersDetails && token ? (
        <EditClimber climber={climber} setClimbers={setClimbers} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Climber;

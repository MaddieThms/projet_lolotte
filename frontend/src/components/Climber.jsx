import React, { useState } from "react";

import ClimberDetails from "./ClimberDetails";

function Climber({ climber }) {
  const [openClimbersDetails, setOpenClimbersDetails] = useState(false);
  const handleOpen = () => setOpenClimbersDetails(!openClimbersDetails);

  return (
    <div>
      <li className="flex flex-col items-center mt-6 ">
        <button type="button" onClick={handleOpen}>
          <img
            src={`http://localhost:5000/picture/${climber.picture}`}
            alt={`${climber.firstname} ${climber.lastname}`}
            className="rounded-full w-[170px] h-[170px] object-cover"
          />
          <h3 className="my-4">
            {climber.firstname} {climber.lastname}
          </h3>
        </button>

        {openClimbersDetails ? (
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
      </li>
      {openClimbersDetails ? (
        <ClimberDetails
          climber={climber}
          openClimbersDetails={openClimbersDetails}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Climber;

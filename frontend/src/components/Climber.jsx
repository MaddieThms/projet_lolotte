import React, { useState } from "react";
import adamAvatar from "../assets/climbers/avatar_adam_ondra.svg";

function Climber({ climber }) {
  const [openClimbersDetails, setOpenClimbersDetails] = useState(false);
  return (
    <div>
      <li className="flex flex-col items-center mt-6">
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
        <div className="w-max p-20 mx-20 mb-6 border-2 border-main-green bg-white rounded-lg flex flex-row">
          {climber.avatar ? (
            <img
              src={adamAvatar}
              alt={`${climber.firstname} ${climber.lastname}`}
              className=" w-[170px]"
            />
          ) : (
            <img
              src={climber.picture}
              alt={`${climber.firstname} ${climber.lastname}`}
              className="rounded-full w-[170px] h-[170px] object-cover"
            />
          )}
          <div className="flex flex-col ml-40">
            <h2>
              {climber.firstname} {climber.lastname}
            </h2>
            <p className="text-main-green">{climber.country}</p>
            <p>{climber.age}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Climber;

import React from "react";

function ClimberDetails({ climber }) {
  return (
    <div className="w-max p-20 mx-20 mb-6 border-2 border-main-green bg-white rounded-lg flex flex-row">
      {climber.avatar ? (
        <img
          src={climber.avatar}
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
  );
}

export default ClimberDetails;

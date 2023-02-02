import { Checkbox } from "@material-tailwind/react";
import React from "react";

function EditClimber({ climber }) {
  return (
    <div className="w-max p-20 mx-20 mb-6 border-2 border-main-green bg-white rounded-lg flex flex-row">
      <img
        src={climber.avatar}
        alt={`${climber.firstname} ${climber.lastname}`}
        className=" w-[170px]"
      />

      <img
        src={climber.picture}
        alt={`${climber.firstname} ${climber.lastname}`}
        className="rounded-full w-[170px] h-[170px] object-cover"
      />

      <div className="flex flex-col ml-40">
        <input
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Prénom"
        />
        <input
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Nom"
        />
        <input
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Pays"
        />
        <input
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Âge"
        />
        <Checkbox label="Voie" />
        <Checkbox label="Indoor" />
        <Checkbox label="Outdoor" />
      </div>
    </div>
  );
}

export default EditClimber;

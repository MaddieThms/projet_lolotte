import React from "react";

function FilterBar() {
  return (
    <div className="flex flex-row gap-4">
      <div className="rounded-lg border-2 w-36 border-main-green pr-2 py-2   ">
        <select className="focus:outline-none px-2 ">
          <option defaultValue="">Nationalité</option>
          <option value="for-rent">For Rent</option>
          <option value="for-sale">For Sale</option>
        </select>
      </div>
      <div className="rounded-lg border-2 w-36 border-main-green pr-2 py-2   ">
        <select className="focus:outline-none px-2">
          <option defaultValue="">Age</option>
          <option value="1000">RM 1000</option>
          <option value="2000">RM 2000</option>
          <option value="3000">RM 3000</option>
          <option value="4000">RM 4000</option>
        </select>
      </div>
      <div className="rounded-lg border-2 w-36 border-main-green pr-2 py-2   ">
        <select className="focus:outline-none px-2">
          <option defaultValue="">Genre</option>
          <option value="1000">RM 1000</option>
          <option value="2000">RM 2000</option>
          <option value="3000">RM 3000</option>
          <option value="4000">RM 4000</option>
        </select>
      </div>
      <div className="rounded-lg border-2 w-36 border-main-green pr-2 py-2   ">
        <select className="focus:outline-none px-2">
          <option defaultValue="">Pratique</option>
          <option value="200">200 sq.ft</option>
          <option value="400">400 sq.ft</option>
          <option value="600">600 sq.ft</option>
          <option value="800 sq.ft">800</option>
          <option value="1000 sq.ft">1000</option>
          <option value="1200 sq.ft">1200</option>
        </select>
      </div>
      <div className="rounded-lg border-2 w-36 border-main-green pr-2 py-2   ">
        <select className="px-2 focus:outline-none ">
          <option defaultValue="">Degré</option>
          <option value="1">1 bedroom</option>
          <option value="2">2 bedrooms</option>
          <option value="3">3 bedrooms</option>
          <option value="4">4 bedrooms</option>
          <option value="5">5 bedrooms</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;

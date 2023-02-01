import React, { useEffect, useState } from "react";
import Climber from "../components/Climber";
import climbersHeader from "../assets/grimpeurs_escalade_libre.svg";

function Climbers() {
  const [climbers, setClimbers] = useState([]);

  useEffect(() => {
    const myHeader = new Headers();

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/climbers`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setClimbers(result);
      })
      .catch((error) => console.warn("error", error));
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          src={climbersHeader}
          alt="grimpeurs emblématiques"
          className="md:w-3/5"
        />
        <div className="flex flex-row gap-4">
          <select className="px-4 py-3 w-full rounded-md focus:outline-none ">
            <option defaultValue="">Nationalité</option>
            <option value="for-rent">For Rent</option>
            <option value="for-sale">For Sale</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md focus:outline-none ">
            <option defaultValue="">Age</option>
            <option value="fully-furnished">Fully Furnished</option>
            <option value="partially-furnished">Partially Furnished</option>
            <option value="not-furnished">Not Furnished</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md focus:outline-none ">
            <option defaultValue="">Genre</option>
            <option value="1000">RM 1000</option>
            <option value="2000">RM 2000</option>
            <option value="3000">RM 3000</option>
            <option value="4000">RM 4000</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md focus:outline-none ">
            <option defaultValue="">Pratique</option>
            <option value="200">200 sq.ft</option>
            <option value="400">400 sq.ft</option>
            <option value="600">600 sq.ft</option>
            <option value="800 sq.ft">800</option>
            <option value="1000 sq.ft">1000</option>
            <option value="1200 sq.ft">1200</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md focus:outline-none ">
            <option defaultValue="">Degré</option>
            <option value="1">1 bedroom</option>
            <option value="2">2 bedrooms</option>
            <option value="3">3 bedrooms</option>
            <option value="4">4 bedrooms</option>
            <option value="5">5 bedrooms</option>
          </select>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-flow-rows my-10">
        {climbers?.map((climber) => (
          <Climber key={climber.id} climber={climber} />
        ))}
        {/* <li className="flex flex-col items-center my-6">
          <img
            src={adam}
            alt="Adam Ondra"
            className="rounded-full w-[170px] h-[170px] object-cover"
          />
          <h3 className="my-4">Adam Ondra</h3>
          <div className="w-16 border-b border-main-green" />
        </li> */}
      </ul>
    </div>
  );
}

export default Climbers;

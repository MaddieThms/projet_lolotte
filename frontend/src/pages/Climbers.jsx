import React, { useEffect, useState } from "react";
import Climber from "../components/Climber";
import climbersHeader from "../assets/grimpeurs_escalade_libre.svg";

function Climbers() {
  const [climbers, setClimbers] = useState();

  useEffect(() => {
    const myHeader = new Headers();

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/climbers`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
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
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-flow-rows my-10">
        {climbers?.map((climber) => (
          <Climber
            key={climber.id}
            climber={climber}
            setClimbers={setClimbers}
          />
        ))}
      </ul>
    </div>
  );
}

export default Climbers;

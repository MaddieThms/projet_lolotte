import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ClimberDetails() {
  const [currentClimber, setCurrentClimber] = useState();
  const idParam = useParams();

  useEffect(() => {
    const myHeader = new Headers();

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/climbers/${idParam.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCurrentClimber({ ...result });
      })
      .catch((error) => console.warn("error", error));
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1>
        A propos de
        <span className="text-main-green"> {currentClimber?.firstname}</span>
      </h1>
      <div className="flex flex-row my-40 justify-around items-end">
        <div className="mr-20 flex flex-col ">
          <img
            src={`http://localhost:5000/picture/${currentClimber?.picture}`}
            alt={`${currentClimber?.firstname} ${currentClimber?.lastname}`}
            className="rounded-full w-[170px] h-[170px] object-cover"
          />
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-4">
            <h3>{currentClimber?.firstname}</h3>
            <h3>{currentClimber?.lastname}</h3>
            <h3>{currentClimber?.age}</h3>
            <h3>{currentClimber?.country}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClimberDetails;

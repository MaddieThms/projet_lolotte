import React, { useEffect, useState } from "react";
import FilterBar from "../../components/FilterBar";
import Climber from "../../components/Climber";
import editPierre from "../../assets/pierreEdit.png";

function EditClimbers() {
  const [climbers, setClimbers] = useState();

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
          src={editPierre}
          alt="grimpeurs emblématiques"
          className="max-h-64 w-full object-cover mb-4"
        />
        <FilterBar />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-flow-rows my-10">
        {climbers?.map((climber) => (
          <Climber key={climber.id} climber={climber} />
        ))}
      </ul>
    </div>
  );
}

export default EditClimbers;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ClimberEditMode from "../../components/ClimberEditMode";
import editPierre from "../../assets/pierreEdit.png";
import SearchBar from "../../components/SearchBar";

function EditClimbers() {
  const [climbers, setClimbers] = useState();
  const [updateClimbers, setUpdateClimbers] = useState(false);

  const toggleUpdateClimber = () => setUpdateClimbers(!updateClimbers);

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
    <div className="z-0">
      <div className="flex flex-col items-center">
        <img
          src={editPierre}
          alt="grimpeurs emblématiques"
          className="max-h-64 w-full object-cover mb-4"
        />
        <div className="flex flex-row gap-4 items-center ">
          <NavLink
            to="/admin/creation/grimpeur"
            className=" rounded-lg bg-main-green hover:bg-white hover:border-2 hover:border-main-green h-11 text-white hover:text-main-green w-36 flex justify-center items-center"
          >
            + Grimpeur
          </NavLink>
          <SearchBar />
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-flow-rows my-10">
        {climbers?.map((climber) => (
          <ClimberEditMode
            key={climber.id}
            climber={climber}
            toggleUpdateClimber={toggleUpdateClimber}
          />
        ))}
      </ul>
    </div>
  );
}

export default EditClimbers;

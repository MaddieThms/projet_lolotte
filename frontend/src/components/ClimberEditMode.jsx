import React from "react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useCurrentAdminContext } from "../context/AdminContext";

function ClimberEditMode({ climber, toggleUpdateClimber }) {
  const { token } = useCurrentAdminContext();

  const notify = () =>
    toast.error(
      "Une erreur est survenue, veuillez recommencer ou contacter l'administrateur du site"
    );
  const deleteClimber = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      id: climber.id,
      firstname: climber.firstname,
      lastname: climber.lastname,
      age: climber.age,
      genre: climber.genre,
      country: climber.country,
      picture: climber.picture,
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
    };

    fetch(`http://localhost:5000/climbers/${climber.id}`, requestOptions)
      .then((response) => {
        if (response.status !== 204) {
          console.warn("error", response.status);
          notify();
        }
      })
      .then((result) => {
        console.warn("test", result);
        toggleUpdateClimber();
      })
      .catch((error) => console.warn("error", error));
  };

  const handleDeleteClimber = async () => {
    deleteClimber();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <li className="flex flex-col items-center mt-6 ">
        <div>
          <img
            src={`http://localhost:5000/picture/${climber.picture}`}
            alt={`${climber.firstname} ${climber.lastname}`}
            className="rounded-full w-[170px] h-[170px] object-cover"
          />
          <h3 className="my-4">
            {climber.firstname} {climber.lastname}
          </h3>
        </div>

        <div className="w-16 border-b border-main-green mb-6" />

        <div className="flex flex-col justify-center items-center">
          <NavLink
            to={`/admin/grimpeurs/${climber.id}`}
            className="text-main-green"
          >
            Editer
          </NavLink>
          <button
            type="button"
            className="text-red-600"
            onClick={() => {
              handleDeleteClimber();
            }}
          >
            Supprimer
          </button>
        </div>
      </li>
    </div>
  );
}

export default ClimberEditMode;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import { useCurrentAdminContext } from "../../context/AdminContext";
import editPierre from "../../assets/pierreEdit.png";

function CreateClimber() {
  const [climbers, setClimbers] = useState();
  const pictureRef = useRef(null);
  const [valueFirstname, setValueFirstname] = useState("");
  const [valueLastname, setValueLastname] = useState("");
  const [valueAge, setValueAge] = useState("");
  const [valueGenre, setValueGenre] = useState("");
  const [valueCountry, setValueCountry] = useState("");
  const [valuePicture, setValuePicture] = useState("");
  const [updateClimbers, setUpdateClimbers] = useState(false);
  const navigate = useNavigate();

  const { token } = useCurrentAdminContext();

  const handleGenreFemme = () => {
    setValueGenre("Femme");
  };
  const handleGenreHomme = () => {
    setValueGenre("Homme");
  };
  const notifySuccessPicture = () =>
    toast.success("Votre photo a bien été envoyée !");
  const notifyErrorPicture = () =>
    toast.error("Une erreur est survenue, veuillez recommencer");

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

  const toggleUpdateClimber = () => setUpdateClimbers(!updateClimbers);

  const pictureSubmit = (e) => {
    e.preventDefault();
    if (pictureRef.current.files[0]) {
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("picture", pictureRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeader,
        body: formData,
      };

      fetch(
        `http://localhost:5000/climbers/${climbers.id}/picture`,
        requestOptions
      )
        .then((response) => response.json())
        .then((results) => {
          setValuePicture(results.picture);
          notifySuccessPicture();
        })
        .catch((error) => {
          notifyErrorPicture();
          console.error(error);
        });
    } else {
      notifyErrorPicture();
    }
  };

  function addClimber() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstname: valueFirstname,
      lastname: valueLastname,
      age: valueAge,
      genre: valueGenre,
      country: valueCountry,
      picture: valuePicture,
    });

    fetch(`http://localhost:5000/climbers`, {
      method: "POST",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .then((newClimber) => {
        setClimbers(...climbers, newClimber);
        navigate("/admin/grimpeurs");
        toggleUpdateClimber();
      })

      .catch((error) => console.warn("error", error));
  }
  return (
    <div className="flex flex-col items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <h1>
        Ajouter un <span className="text-main-green">grimpeur</span>
      </h1>
      <div className="flex flex-row my-20 justify-around items-end">
        <div className="mr-20 flex flex-col ">
          <img
            src={editPierre}
            alt="aperçu du grimpeur"
            className="rounded-full w-[170px] h-[170px] object-cover"
          />
          <form
            encType="multipart/form-data"
            onSubmit={pictureSubmit}
            className="mt-4 font-sans flex flex-col "
          >
            <input type="file" ref={pictureRef} className="text-sm h-8" />
            <button
              type="submit"
              className="button border-2 border-main-green text-main-green font-medium  rounded-lg w-32 my-2 h-8"
            >
              Valider
            </button>
          </form>
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-4">
            <input
              className="peer h-8 w-36 rounded-lg border-2 border-main-green bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Prénom"
              onChange={(e) => setValueFirstname(e.target.value)}
            />
            <input
              className="peer h-8 w-36 rounded-lg border-2 border-main-green bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Nom"
              onChange={(e) => setValueLastname(e.target.value)}
            />
            <input
              className="peer h-8 w-36 rounded-lg border-2 border-main-green bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Pays"
              onChange={(e) => setValueCountry(e.target.value)}
            />
            <input
              className="peer h-8 w-36 rounded-lg border-2 border-main-green bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Âge"
              onChange={(e) => setValueAge(e.target.value)}
            />
            <div className="grid grid-cols-2 grid-flow-rows">
              <Checkbox label="Homme" ripple onClick={handleGenreHomme} />
              <Checkbox label="Femme" ripple onClick={handleGenreFemme} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 grid-flow-rows">
              <Checkbox label="Voie" ripple />
              <Checkbox label="Bloc" ripple />
            </div>
            <div className="grid grid-cols-3 grid-flow-rows">
              <Checkbox label="Résine" ripple />
              <Checkbox label="Outdoor" ripple />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-10 md:pl-[56px]">
        <button
          type="button"
          onClick={addClimber}
          className="button bg-main-green text-white text-md font-bold rounded-lg w-60 h-8 my-2"
        >
          Publier
        </button>
      </div>
    </div>
  );
}

export default CreateClimber;

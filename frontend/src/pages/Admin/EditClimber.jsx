import React, { useEffect, useRef, useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useCurrentAdminContext } from "../../context/AdminContext";

function EditClimber() {
  const [currentClimber, setCurrentClimber] = useState();
  const [updateClimbers, setUpdateClimbers] = useState(false);
  const pictureRef = useRef(null);
  const [newFirstname, setFirstname] = useState(currentClimber?.firstname);
  const [newLastname, setLastname] = useState(currentClimber?.lastname);
  const [newAge, setAge] = useState(currentClimber?.age);
  const [newGenre, setGenre] = useState(currentClimber?.genre);
  const [newCountry, setCountry] = useState(currentClimber?.country);
  const [newPicture, setPicture] = useState(currentClimber?.picture);
  const idParam = useParams();
  const { token } = useCurrentAdminContext();

  const notifySuccessPicture = () =>
    toast.success("Votre photo a bien été envoyée !");
  const notifyErrorPicture = () =>
    toast.error("Une erreur est survenue, veuillez recommencer");

  const handleGenreFemme = () => {
    setGenre("Femme");
  };
  const handleGenreHomme = () => {
    setGenre("Homme");
  };

  useEffect(() => {
    const myHeader = new Headers();

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/climbers/${idParam.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.warn("data", result);
        setFirstname(result.firstname);
        setLastname(result.lastname);
        setAge(result.age);
        setGenre(result.genre);
        setCountry(result.country);
        setPicture(result.picture);
      })
      .catch((error) => console.warn("error", error));
  }, []);

  const toggleUpdateClimber = () => setUpdateClimbers(!updateClimbers);

  function updateClimber() {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);
    myHeader.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      id: currentClimber?.id,
      firstname: newFirstname,
      lastname: newLastname,
      age: newAge,
      genre: newGenre,
      country: newCountry,
      picture: newPicture,
    });
    console.warn("body", raw);

    const requestOptions = {
      headers: myHeader,
      method: "PUT",
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:5000/climbers/${idParam.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.warn("dt", result?.firstname);
        setCurrentClimber({
          ...currentClimber,
          firstname: result?.firstname,
          lastname: result?.lastname,
          age: result?.age,
          genre: result?.genre,
          country: result?.country,
          picture: result?.picture,
        });
        toggleUpdateClimber();
      })
      .catch((error) => console.warn("error", error));
  }

  const pictureSubmit = (e) => {
    e.preventDefault();
    if (pictureRef.current.files[0]) {
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("picture", pictureRef.current.files[0]);

      const requestOptions = {
        method: "PUT",
        headers: myHeader,
        body: formData,
      };
      fetch(
        `http://localhost:5000/climbers/${idParam.id}/picture`,
        requestOptions
      )
        .then((response) => response.json())
        .then((results) => {
          console.warn("results", results.picture);
          setCurrentClimber({ ...currentClimber, picture: results.picture });
          updateClimber();
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

  const handleUpdateClimber = async () => {
    updateClimber();
  };

  return (
    <div className="flex flex-col items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <h1>
        Editer ce <span className="text-main-green">grimpeur</span>
      </h1>
      <div className="flex flex-row my-20 justify-around items-end">
        <div className="mr-20 flex flex-col ">
          <img
            src={`http://localhost:5000/picture/${newPicture}`}
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
              placeholder={newFirstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="peer h-8 w-36 rounded-lg border-2 border-main-green bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder={newLastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              className="peer h-8 w-36 rounded-lg border-2 border-main-green bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder={newCountry}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              className="peer h-8 w-36 rounded-lg border-2 border-main-green bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder={newAge}
              onChange={(e) => setAge(e.target.value)}
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
          onClick={handleUpdateClimber}
          className="button bg-main-green text-white text-md font-bold rounded-lg w-60 h-8 my-2"
        >
          Publier
        </button>
      </div>
    </div>
  );
}

export default EditClimber;

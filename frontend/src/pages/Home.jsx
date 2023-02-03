import React from "react";
import homeCliff from "../assets/home-falaise.png";
import homeIndoor from "../assets/pierreIndoor.png";

function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around md:items-center content-center">
      <img src={homeCliff} alt="" className="my-20 hidden md:block" />
      <div className="md:w-1/2 mt-6 mx-6 md:mt-0 md:mx-0">
        <h1 className="text-4xl md:text-6xl">
          La grimpe en <span className="text-main-green">stats</span>
        </h1>
        <p className="mt-10 md:w-3/4">
          Un tout nouveau projet lancé par Kayoo Escalade rassemblant toutes les
          données sur la grimpe. La première version que vous pouvez voir
          présente des grimpeurs de différentes pratiques à travers le monde. A
          venir : un résumé de toutes les compétitions et une carte référençant
          les voies les plus célèbres en extérieur.
        </p>
      </div>
      <div className="w-max-screen overflow-x-hidden  ">
        <img src={homeIndoor} alt="" className="my-10 block md:hidden ml-14" />
      </div>
    </div>
  );
}

export default Home;

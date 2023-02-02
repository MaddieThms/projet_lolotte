import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentAdminContext } from "../../context/AdminContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAdmin, setToken } = useCurrentAdminContext();
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleConnexion = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = { method: "POST", body, headers: myHeaders };

    if (email && password) {
      fetch(`http://localhost:5000/login`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setAdmin(result.admin);
          setToken(result.token);
          navigate("/edit/grimpeurs");
        })
        .catch((error) => console.warn(error));
    } else {
      setErrorMessage("Merci de rentrer un email et un mot de passe");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Connexion admin
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleConnexion}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email@exemple.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="button text-2xl font-semibold text-main-green w-full hover:text-white border-2 border-main-green hover:bg-main-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Se connecter
              </button>
            </form>
            <div>{errorMessage}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

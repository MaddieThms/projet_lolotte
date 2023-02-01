import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { CurrentAdminContextProvider } from "./context/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentAdminContextProvider>
        <App />
      </CurrentAdminContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

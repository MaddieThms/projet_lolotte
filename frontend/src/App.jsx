import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Climbers from "./pages/Climbers";
import Login from "./pages/Admin/Login";
import EditClimbers from "./pages/Admin/EditClimbers";
import Footer from "./components/Footer";
import { useCurrentAdminContext } from "./context/AdminContext";

function App() {
  const { token } = useCurrentAdminContext();
  return (
    <div className="min-h-screen z-0 relative">
      <Navbar />

      {token ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grimpeurs" element={<Climbers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit/grimpeurs" element={<EditClimbers />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grimpeurs" element={<Climbers />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Climbers from "./pages/Climbers";
import Login from "./pages/Admin/Login";
import EditClimbers from "./pages/Admin/AdminClimbers";
import Footer from "./components/Footer";
import { useCurrentAdminContext } from "./context/AdminContext";
import CreateClimber from "./pages/Admin/CreateClimber";
import EditClimber from "./pages/Admin/EditClimber";
import ClimberDetails from "./pages/ClimberDetails";

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
          <Route path="/admin/grimpeurs" element={<EditClimbers />} />
          <Route path="/admin/grimpeurs/:id" element={<EditClimber />} />
          <Route path="/admin/creation/grimpeur" element={<CreateClimber />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grimpeurs" element={<Climbers />} />
          <Route path="/grimpeurs/:id" element={<ClimberDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;

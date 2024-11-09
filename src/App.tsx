import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="font-title">
      <Routes>
        <Route path="Olx-Clone/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

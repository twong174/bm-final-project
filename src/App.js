import "./App.css";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ResourcePage from "./components/ResourcePage";
import AssignmentPage from "./components/AssignmentPage";

function App() {
  const [defaultScreen, setDefaultScreen] = useState("HomePage");

  const renderHomeScreen = () => {
    switch (defaultScreen) {
      case "Resources":
        return <ResourcePage />;
      case "Assignments":
        return <AssignmentPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar setScreen={setDefaultScreen} />
      {renderHomeScreen()}
    </>
  );
}

export default App;

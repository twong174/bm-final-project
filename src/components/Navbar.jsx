import React from "react";
import "../styles/Navbar.css";
import HomeIcon from "../icons/home.svg";
import ResourcesIcon from "../icons/book_2.svg";
import AssignmentsIcon from "../icons/assignment.svg";

const Navbar = ({ setScreen }) => {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li onClick={() => setScreen("HomePage")}>
            <div className="nav-page-container">
              <img className="nav-page-icon" src={HomeIcon} alt="Home Icon" />
              <p className="nav-page-title"> HOME </p>
            </div>
          </li>
          <li onClick={() => setScreen("Resources")}>
            <div className="nav-page-container">
              <img
                className="nav-page-icon"
                src={ResourcesIcon}
                alt="Resources Icon"
              />
              <p className="nav-page-title"> RESOURCES </p>
            </div>
          </li>
          <li onClick={() => setScreen("Assignments")}>
            <div className="nav-page-container">
              <img
                className="nav-page-icon"
                src={AssignmentsIcon}
                alt="Assignments Icon"
              />
              <p className="nav-page-title"> ASSIGNMENTS </p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import "../styles/ResourceWidget.css";
import LibraryBooksIcon from "../icons/library_books.svg";

const ResourceWidget = () => {
  return (
    <div className="resource-wiget-container">
      <div className="resource-widget-title-container">
        <p className="resource-widget-title"> Unit 1 Reading </p>
        <p className="resource-widget-due-date">11-12-24</p>
      </div>
      <div className="resource-reading-container">
        <img src={LibraryBooksIcon} />
        <p> Unit 1 Reading.pdf</p>
      </div>
    </div>
  );
};

export default ResourceWidget;

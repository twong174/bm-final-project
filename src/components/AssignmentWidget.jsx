import React from "react";
import "../styles/AssignmentWidget.css";

const AssignmentWidget = () => {
  return (
    <div className="assignment-widget-container">
      <div className="assignment-widget-header-container">
        <input type="checkbox" />
        <p> Due Date: 12-23-23</p>
      </div>
      <div className = "homework-title-container">
        <p> Homework #1 </p>  
      </div> 
    </div>
  );
};

export default AssignmentWidget;

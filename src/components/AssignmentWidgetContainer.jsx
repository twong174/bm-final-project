import React from "react";
import "../styles/AssignmentWidgetContainer.css";
import AssignmentWidget from "./AssignmentWidget";
import ResourceWidget from "./ResourceWidget";

const WidgetContainer = (props) => {
  return (
    <div className="widget-container">
      <p className="widget-title">ASSIGNMENTS</p>

      <div className="inner-widget-container">
        <AssignmentWidget />
        <AssignmentWidget />
        <AssignmentWidget />
      </div>
    </div>
  );
};

export default WidgetContainer;

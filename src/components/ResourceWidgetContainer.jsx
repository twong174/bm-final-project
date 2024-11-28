import React from "react";
import "../styles/ResourceWidgetContainer.css";
import ResourceWidget from "./ResourceWidget";

const ResourceWidgetContainer = () => {
  return (
    <div className="widget-container">
      <p className="widget-title">RESOURCES</p>

      <div className="inner-widget-container">
        <ResourceWidget />
        <ResourceWidget />
        <ResourceWidget />
      </div>
    </div>
  );
};

export default ResourceWidgetContainer;

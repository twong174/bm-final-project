import React from "react";
import "../styles/PriorityLabel.css";

const PriorityLabel = ({ status }) => {
  // Determine the class name based on the status
  const getClassName = () => {
    switch (status.toLowerCase()) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "priority-default";
    }
  };

  return (
    <div className={`priority-label-container ${getClassName()}`}>
      <p className="priority-status">{status}</p>
    </div>
  );
};

export default PriorityLabel;

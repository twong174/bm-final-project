import React from "react";
import "../styles/ExpandedAssignmentWidget.css";
import PriorityLabel from "./PriorityLabel";
import DescriptionIcon from "../icons/description.svg";

const ExpandedAssignmentWidget = (props) => {
  return (
    <div className="expanded-assignment-widget-container">
      <div className="expanded-assignment-widget-header">
        <div className="expanded-assignment-left">
          <PriorityLabel status={props.priority} />

          <p className="expanded-assignment-title"> {props.assignmentTitle} </p>
        </div>
        <p> Due Date: {props.assignmentDueDate} </p>
      </div>

      <div className="assignment-pdf-container">
        <img src={DescriptionIcon} />
        <a
          href={props.assignmentPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="assignment-pdf-link"
        >
          {props.assignmentTitle}.pdf
        </a>
      </div>
    </div>
  );
};

export default ExpandedAssignmentWidget;

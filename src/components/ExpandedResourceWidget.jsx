import React from "react";
import "../styles/ExpandedResourceWidget.css";
import VideocamIcon from "../icons/videocam.svg";
import LibraryBooksIcon from "../icons/library_books.svg";

const ExpandedResourceWidget = (props) => {
  return (
    <>
      <div className="expanded-resource-widget-container">
        <div className="expanded-resource-title-container">
          <p className="expanded-resource-title"> {props.resourceTitle}</p>
        </div>

        <div className="assignment-pdf-container">
          <img src={props.resourceIcon} />
          <a target="_blank" href={props.resourceLink}>
            {props.resourceTitle}
          </a>
        </div>
      </div>
    </>
  );
};

export default ExpandedResourceWidget;

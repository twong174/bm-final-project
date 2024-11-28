import React from "react";
import "../styles/AssignmentPage.css";
import ExpandedAssignmentWidget from "./ExpandedAssignmentWidget";

const AssignmentPage = () => {
  return (
    <>
      <div className="assignment-title-container">
        <p className="assignment-title"> ASSIGNMENTS </p>
        <p className="assignment-description">
          Everything you need to do to pass the class!
        </p>
      </div>

      <div className="expanded-assignment-widget">
        <ExpandedAssignmentWidget
          assignmentTitle="Tea Ceremony Observation Assignment"
          assignmentDueDate="12/4/24"
          assignmentPDF="/pdfs/TeaCeremonyObservationAssignment.pdf"
          priority="High"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Zen Garden Creation Assignment"
          assignmentDueDate="12/9/24"
          assignmentPDF="/pdfs/ZenGardenCreationAssignment.pdf"
          priority="Medium"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Reflections on Buddhist Art"
          assignmentDueDate="12/9/24"
          assignmentPDF="/pdfs/ReflectiononBuddhistArtwork.pdf"
          priority="Medium"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Zen in Art or Poetry"
          assignmentDueDate="12/16/24"
          assignmentPDF="/pdfs/ZeninArtorPoetry.pdf"
          priority="Low"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Zen and Technology"
          assignmentDueDate="12/16/24"
          assignmentPDF="/pdfs/ZenandTechnology.pdf"
          priority="Low"
        />
      </div>
    </>
  );
};

export default AssignmentPage;

import React from "react";
import "../styles/AssignmentPage.css";
import ExpandedAssignmentWidget from "./ExpandedAssignmentWidget";
import TeaCeremonyPDF from "../pdfs/TeaCeremonyObservationAssignment.pdf";
import ZenGardenPDF from "../pdfs/ZenGardenCreationAssignment.pdf";
import ReflectionPDF from "../pdfs/ReflectiononBuddhistArtwork.pdf";
import ZenArtPoetryPDF from "../pdfs/ZeninArtorPoetry.pdf";
import FieldTripPDF from "../pdfs/FieldTrip.pdf";
import ZenTechPDF from "../pdfs/ZenandTechnology.pdf";

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
          assignmentPDF={TeaCeremonyPDF}
          priority="High"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Zen Garden Creation Assignment"
          assignmentDueDate="12/9/24"
          assignmentPDF={ZenGardenPDF}
          priority="Medium"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Reflections on Buddhist Art"
          assignmentDueDate="12/9/24"
          assignmentPDF={ReflectionPDF}
          priority="Medium"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Zen in Art or Poetry"
          assignmentDueDate="12/16/24"
          assignmentPDF={ZenArtPoetryPDF}
          priority="Low"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Zen and Technology"
          assignmentDueDate="12/16/24"
          assignmentPDF={ZenTechPDF}
          priority="Low"
        />
        <ExpandedAssignmentWidget
          assignmentTitle="Field Trip to Dai Bosatsu Zendo, Kongo-Ji"
          assignmentDueDate="12/18/24"
          assignmentPDF={FieldTripPDF}
          priority="Low"
        />
      </div>
    </>
  );
};

export default AssignmentPage;

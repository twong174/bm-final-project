import React from "react";
import ExpandedResourceWidget from "./ExpandedResourceWidget";
import "../styles/ResourcePage.css";
import VideocamIcon from "../icons/videocam.svg";
import LibraryBooksIcon from "../icons/library_books.svg";

const ResourcePage = () => {
  return (
    <>
      <div className="resource-title-container">
        <p className="resource-title"> RESOURCES </p>
        <p className="resource-description">Class catalog...happy learning!</p>
      </div>

      <div className="expanded-resource-widget">
        <ExpandedResourceWidget
          resourceTitle="The Way of Zen"
          resourceLink="https://terebess.hu/english/AlanWatts-The%20Way%20of%20Zen.pdf"
          resourceIcon={LibraryBooksIcon}
        />
        <ExpandedResourceWidget
          resourceTitle="Zen Buddhism - The Direct Method"
          resourceLink="https://www.youtube.com/watch?v=kRXJEqRbuS4&ab_channel=MostlyTrue"
          resourceIcon={VideocamIcon}
        />
        <ExpandedResourceWidget
          resourceTitle="Zen Mind, Beginner's Mind"
          resourceLink="https://terebess.hu/zen/mesterek/Zen-Mind.pdf"
          resourceIcon={LibraryBooksIcon}
        />
        <ExpandedResourceWidget
          resourceTitle="Zen"
          resourceLink="https://www.britannica.com/topic/Zen"
          resourceIcon={LibraryBooksIcon}
        />
        <ExpandedResourceWidget
          resourceTitle="Wabi Sabi Teachings
          "
          resourceLink="https://www.omaritani.com/blog/wabi-sabi-philosophy-teachings"
          resourceIcon={LibraryBooksIcon}
        />
        <ExpandedResourceWidget
          resourceTitle="Zen Mind, Beginner's Mind"
          resourceLink="https://terebess.hu/zen/mesterek/Zen-Mind.pdf"
          resourceIcon={LibraryBooksIcon}
        />
      </div>
    </>
  );
};

export default ResourcePage;

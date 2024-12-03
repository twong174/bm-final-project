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
          resourceDescription="The first section is an optional reading that gives more insight into the background of Zen Buddhism. This covers the history for those who are history-inclined or wish to know more about the sect. The second section preambles our class discussion by introducing concepts like the Koan and emptiness. Pay close attention to the section on emptiness.
          "
        />
        <ExpandedResourceWidget
          resourceTitle="Zen Buddhism - The Direct Method"
          resourceLink="https://www.youtube.com/watch?v=kRXJEqRbuS4&ab_channel=MostlyTrue"
          resourceIcon={VideocamIcon}
          resourceDescription="This video will introduce the concept of the direct method. The direct method is a zen innovation of the concept of attachment. This video will also explain how Zen differs from other forms of Buddhism. Still, primarily, we will be covering the idea of direct attachment, which you will learn refers to mental attachments.
          "
        />
        <ExpandedResourceWidget
          resourceTitle="Zen Mind, Beginner's Mind"
          resourceLink="https://terebess.hu/zen/mesterek/Zen-Mind.pdf"
          resourceIcon={LibraryBooksIcon}
          resourceDescription="This source is a good introduction to the practice of Zen meditation and gives instructions on how to meditate. Chapter one should be used when you practice zen meditation in class and at home for our logging assignment. The rest of the book is not required but a supplemental read that will address and develop the points we will hit on in class, such as repetition, effort, and mistakes.
          "
        />
        <ExpandedResourceWidget
          resourceTitle="Zen"
          resourceLink="https://www.britannica.com/topic/Zen"
          resourceIcon={LibraryBooksIcon}
          resourceDescription="This source will introduce Zen Buddhism, how it differs from Mahayana and Theravada Buddhism, and how they are similar. This background is important in understanding the context behind Zen as we study their particular meditations."
        />
        <ExpandedResourceWidget
          resourceTitle="Wabi Sabi Teachings
          "
          resourceLink="https://www.omaritani.com/blog/wabi-sabi-philosophy-teachings"
          resourceIcon={LibraryBooksIcon}
          resourceDescription="Wabi-sabi: the beauty in imperfection. This phrase became popular worldwide for its aesthetic meaning, but wabi-sabi is not just a tattoo to get in your early 20s; a part of Zen practice and meditation. This is a type of insight specific to Zen Buddhism, and we will cover it during class. Please read this and come to class ready to discuss wabi-sabi.
          "
        />
        <ExpandedResourceWidget
          resourceTitle="Zazen meditation, Kyosaku, Wood Clappers, and Sutra Copying
          "
          resourceLink="https://www.youtube.com/watch?v=1hj4-hol2SM "
          resourceIcon={LibraryBooksIcon}
          resourceDescription="The practice of Zazen is the primary method of meditation for Zen Buddhists, this video goes step by step through a Japanese zazen meditation at a Japanese temple. This video introduces many other Zen practices, and I want you to think about how and why they were developed.
          Some guiding thoughts: 
          
          Pay attention to the sounds associated with the meditations, the woodchoppers are specifically part of zen meditation. What do you think about Kyosaku? How do you think it contributes to meditation and the goal of Buddhism? Would you rather chat or copy the sutra?
          "
        />
      </div>
    </>
  );
};

export default ResourcePage;

import React from "react";
import AssignmentWidgetContainer from "../components/AssignmentWidgetContainer";
import ResourceWidgetContainer from "../components/ResourceWidgetContainer";
import "../styles/HomePage.css";

const HomePage = () => {
  const currentDate = new Date();

  const formattedDate = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear().toString().slice(-2)}`;

  return (
    <>
      <div className="home-title-container">
        <p className="home-title"> ZEN BUDDHISM </p>
        <p className="home-date"> WEEK 4 &#124; {formattedDate} </p>
        <p className="home-names"> TYLER WONG &#124; LOLA GUNTER</p>

        <div className="description-container">
          <h1> OVERVIEW</h1>
          <p>
            Zen Buddhism is a school of Buddhism that originated in China during
            the Tang Dynasty. Its a mix of Indian Mahayana Buddhism and Taoism
            and is known for its emphasis on meditation and simplicity.
          </p>
        </div>
        <div className="description-container">
          <h1> ORIGINS</h1>
          <p>
            Zen originated in China as the Chan School and was influenced by
            Taoism. Zen is the Japanese pronunciation of the Chinese word Ch’an,
            which comes from the Sanskrit word dhyana, meaning “mediation"
          </p>
        </div>

        <div className="description-container">
          <h1> TEACHINGS</h1>
          <p>
            Zen teaches that enlightenment can be achieved by anyone through
            meditation and that it's possible to understand the meaning of life
            without being misled by language or logical thought
          </p>
        </div>

        <div className="description-container">
          <h1> PRACTICES</h1>
          <p>
            Zazen: A simple practice of sitting upright and focusing on
            breathing in your belly until you’re fully present
            <br />
            Koans: Question and answer riddles used by Zen masters to trigger
            enlightenment
            <br />
            Zen poetry, painting, and calligraphy: Zen masters developed
            specific forms of this art as modes of mediation and visual
            teachings
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;

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
            Zen Buddhism branches off of Mahayana Buddhism, which originated in
            China but has become mainstream in Japan. Unlike Theravada Buddhism,
            Zen has been influenced heavily by traditional Chinese beliefs, such
            as Taoism, due to its origin. Compared to other Buddhist sects, Zen
            is characterized by its simplicity as a teaching method. Zen is
            direct and practical, removing many scriptures, rituals, and objects
            of worship that make traditional Buddhism convoluted (from the Zen
            perspective).
            <br />
            <br />
            In the name of simplicity, Zen Buddhism, in summary, is a sect of
            Buddhism that originated in China and was later moved to Japan. It
            focuses heavily on meditation, simplifying the practice.
          </p>
        </div>
        <div className="description-container">
          <h1> ORIGINS</h1>
          <p>
            Zen Buddhism originated in China during the Tang dynasty (~600-900
            CE) as a branch of Mahayana Buddhism called Cha’an. This origin
            accounts for the influence of both traditional Indian Buddhism and
            Taoism seen in Zen Buddhism. Zen evolved from the original name
            Cha’an, which came from the Sanskrit word dhyana; these words most
            intuitively translate into English as meditation, highlighting the
            heightened significance of meditation in Zen Buddhism. We call Zen
            Buddhism Zen because despite originating in China, the practice
            became extremely popular in Japan while only partially practiced in
            Vietnam, China, and Korea comparatively.
          </p>
        </div>

        <div className="description-container">
          <h1> TEACHINGS</h1>
          <p>
            Zen teaches that anyone can achieve enlightenment through meditation
            and that it's possible to understand the meaning of life without
            being misled by language or logical thought.
          </p>
        </div>

        <div className="description-container">
          <h1> PRACTICES</h1>
          <p>
            <strong>Zazen</strong>  is the practice of sitting. During Zazen, meditators
            will sit on their knees or with their legs crossed; either way,
            their hands will be placed with one hand over the other, their
            thumbs touching, creating an oval called the mudra position. During
            Zazen, practitioners are practicing a kind of sati (mindfulness).
            The caveat and difference between Zen and other mindfulness
            meditations is that there is no right way to do it, but there is a
            wrong way. The wrong way is to have a goal and to be in the wrong
            position. Zazen is not targeted; it is entirely experiential. A
            practitioner does not do Zazen to become mindful; they do Zazen to
            do Zazen.
            <br />
            <br />
            <strong>Koans</strong> are stories encouraging deeper introspection
            beyond logical assertions of attachment and Buddhist ideals. It
            helps practitioners go beyond “logic” and become aware of
            paradoxical solutions. A famous Koan is the story of “Two Monks and
            a Woman.” In the story, we are given the context that monks should
            avoid women, but the monks encounter a woman needing help to cross a
            river. The more senior monk carries her across and sets her down.
            The junior questions the senior monk for his actions, to which he
            responds by asking the junior why he was still carrying the woman
            (in his mind) if he (the senior monk) had already set her down
            across the river. This Koan elaborates and brings awareness to
            indirect forms of attachment. Understanding this paradox creates
            deeper awareness than just understanding direct attachments like the
            attachment to personal items, the self, and the family.
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;

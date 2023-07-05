import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Demo example one",
    github: "https://github.com/hamzaDev654?tab=repositories",
    demo: "https://github.com/hamzaDev654?tab=repositories",
  },
  {
    id: 2,
    image: IMG2,
    title: "Demo example two",
    github: "https://github.com/hamzaDev654?tab=repositories",
    demo: "https://github.com/hamzaDev654?tab=repositories",
  },
  {
    id: 3,
    image: IMG3,
    title: "Demo example three",
    github: "https://github.com/hamzaDev654?tab=repositories",
    demo: "https://github.com/hamzaDev654?tab=repositories",
  },
  {
    id: 4,
    image: IMG4,
    title: "Demo example four",
    github: "https://github.com/hamzaDev654?tab=repositories",
    demo: "https://github.com/hamzaDev654?tab=repositories",
  },
  {
    id: 5,
    image: IMG5,
    title: "Demo example five",
    github: "https://github.com/hamzaDev654?tab=repositories",
    demo: "https://github.com/hamzaDev654?tab=repositories",
  },
  {
    id: 6,
    image: IMG6,
    title: "Demo example Six",
    github: "https://github.com/hamzaDev654?tab=repositories",
    demo: "https://github.com/hamzaDev654?tab=repositories",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((portfolio) => {
          return (
            <article className="portfolio__items" key={portfolio.id}>
              <div className="portfolio__item-image">
                <img src={portfolio.image} alt={portfolio.title} />
              </div>
              <h3>{portfolio.title}</h3>
              <div className="portfolio__items-cta">
                <a
                  href={portfolio.github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={portfolio.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

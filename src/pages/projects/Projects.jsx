import React from "react";
import "./Projects.scss";
import proj1 from "../../assets/img/project-1.jpg";
import proj2 from "../../assets/img/project-2.jpg";
import proj3 from "../../assets/img/project-3.jpg";
import proj4 from "../../assets/img/project-4.jpg";
import proj5 from "../../assets/img/project-5.jpg";
import proj6 from "../../assets/img/project-6.jpg";

const Projects = () => {
  return (
    <div>
      <div className="project-bgImg-container">
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>
        <main className="projects">
          <div className="projects__items">
            <div className="projects__item">
              <img src={proj1} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={proj2} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={proj3} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={proj4} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={proj5} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={proj6} alt="My Project" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;

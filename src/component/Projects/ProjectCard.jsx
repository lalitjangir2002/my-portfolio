import React from 'react'
import { Tilt } from "react-tilt";

const ProjectCard = ({project}) => {
    const tiltOptions = {
        max: 45,
        scale: 1,
        speed: 750,
      };

  return (
    <Tilt
            // key={project.id}
            className="tilt-card"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            options={tiltOptions}
          >
            <div className="tilt-card-content">
              <h2>{project.name}</h2>
              <div className="button-container">
                <button className="custom-button">
                  <a href={project.GithubURL} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </button>
                <button className="custom-button">
                  <a
                    href="https://css-nita.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </Tilt>
  )
}

export default ProjectCard;

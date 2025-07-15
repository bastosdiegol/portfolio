import { useEffect, useState } from "react";
import { TbCube, TbCubePlus } from "react-icons/tb";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../../../data/projects.json";
import "./styles.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section
      id="projects"
      className="projects scroll-my-28 flex flex-col items-center mt-8 px-4 gap-8"
    >
      <div className="section-title-wrapper flex gap-4 items-center">
        <TbCube />
        <h1 className="section-title text-4xl">Projects</h1>
      </div>
      <div className="projects-article-wrapper flex flex-col gap-8 w-full max-w-6xl">
        {projects.map((proj) => (
          <article
            key={proj.id}
            className="project-article flex flex-col md:flex-row space-between"
          >
            <div className="project-content flex flex-col gap-4">
              <div className="project-name-wrapper flex gap-8 items-center">
                <div className="project-icon">
                  <TbCubePlus />
                </div>
                <h2>{proj.name}</h2>
              </div>
              <div className="proj-content-text flex flex-col gap-4 mt-2">
                <p>
                  <strong>About:</strong> {proj.about}
                </p>
                <p>
                  <strong>Project Constraints:</strong> {proj.restriction}
                </p>
                <p>
                  <strong>Technologies used:</strong> {proj.features.join(", ")}
                </p>
              </div>
            </div>
            <div className="project-images flex flex-col gap-4 mt-4">
              <figure>
                <img 
                  className="project-img"
                  src={proj.image.src}
                  alt={proj.image.alt}
                />
              </figure>
              <div className="project-references">
                {proj.references.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.href}
                    title={ref.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ref.icon === "github" ? (
                      <FaGithub className="project-icon" />
                    ) : (
                      <FaExternalLinkAlt className="project-icon" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

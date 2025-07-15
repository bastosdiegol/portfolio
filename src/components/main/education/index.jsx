import { FaGraduationCap } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import "./styles.css";

function Education() {
  return (
    <section
      id="education"
      className="education skip-link scroll-mt-28 flex flex-col items-center mt-8 px-4 gap-8"
    >
      <div className="section-title-wrapper flex gap-4 items-center">
        <FaGraduationCap />
        <h1 className="section-title text-4xl">Education</h1>
      </div>
      <div className="articles-wrapper flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <article className="education-article web-dev">
          <div className="education-name-wrapper">
            <div className="education-icon">
              <TbCertificate />
            </div>
            <h2>Internet Applications and Web Development</h2>
          </div>
          <div className="education-content">
            <h3>College Diploma at Fanshawe College</h3>
            <p>
              Period: <span className="period">2023 to 2025</span>
            </p>
            <p className="education-skills">Notable Skills Developed:</p>
            <ul className="skill-list">
              <li>Full-Stack Development</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>CI/CD</li>
              <li>Docker</li>
              <li>PWAs</li>
              <li>Firebase</li>
              <li>Databases</li>
              <li>OAS</li>
            </ul>
          </div>
        </article>
        <article className="education-article game-dev">
          <div className="education-name-wrapper">
            <div className="education-icon">
              <TbCertificate />
            </div>
            <h2>Game Development - Advanced Programming</h2>
          </div>
          <div className="education-content">
            <h3>Post-graduate Program at Fanshawe College</h3>
            <p>
              Period: <span className="period">2022 to 2023</span>
            </p>
            <p className="education-skills">Notable Skills Developed:</p>
            <ul className="skill-list">
              <li>C++</li>
              <li>Game Engine Development</li>
              <li>Version Control</li>
              <li>Design Patterns</li>
              <li>Shader Programming</li>
              <li>Network Programming</li>
              <li>Multithreading</li>
              <li>Software Testing</li>
              <li>FMOD</li>
              <li>OpenGL</li>
            </ul>
          </div>
        </article>
        <article className="education-article bachelor">
          <div className="education-name-wrapper">
            <div className="education-icon">
              <TbCertificate />
            </div>
            <h2>Computer Science</h2>
          </div>
          <div className="education-content">
            <h3>Bacherlor at Faculdade Ruy Barbosa</h3>
            <p>
              Period: <span className="period">2004 to 2008</span>
            </p>
            <p className="education-skills">Notable Skills Developed:</p>
            <ul className="skill-list">
              <li>C++</li>
              <li>Game Engine Development</li>
              <li>Version Control</li>
              <li>Design Patterns</li>
              <li>Shader Programming</li>
              <li>Network Programming</li>
              <li>Multithreading</li>
              <li>Software Testing</li>
              <li>FMOD</li>
              <li>OpenGL</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;

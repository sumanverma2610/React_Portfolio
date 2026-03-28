import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Profile Section */}
        <div className="about-intro">
          <h1>About Me</h1>
          <p>
            Hello 👋 I'm <strong>Suman Verma</strong>, a passionate 
            <span className="highlight"> Full Stack Developer</span>.
            I specialize in building modern, scalable and responsive web
            applications using modern technologies.
          </p>

          <p>
            I enjoy solving complex problems and creating efficient backend
            systems as well as beautiful frontend interfaces.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Skills Section */}
        <div className="about-skills">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">React.js</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Express.js</div>
            <div className="skill-card">Prisma ORM</div>
            <div className="skill-card">PostgreSQL</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">HTML5</div>
            <div className="skill-card">CSS3</div>
            <div className="skill-card">Git & GitHub</div>
            <div className="skill-card">REST API</div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="about-experience">
          <h2>What I Do</h2>

          <ul>
            <li>Build Full Stack Web Applications</li>
            <li>Create REST APIs using Node.js & Express</li>
            <li>Design databases using PostgreSQL</li>
            <li>Develop responsive UI using React</li>
            <li>Authentication & Authorization (JWT)</li>
            <li>Backend development using Prisma ORM</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
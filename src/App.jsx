
import { useState } from "react";
import "./App.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Responsive Design",
  "Git & GitHub",
  "C#",
  "Excel Automation",
];

const projects = [
  {
    number: "01",
    title: "EasyBiz Excel Manager",
    category: "Business Management",
    description:
      "A business management application for small retail stores featuring product management, checkout, sales tracking, and dashboard reporting.",
    tech: ["Excel VBA", "Automation"],
  },
  {
    number: "02",
    title: "Sales Analysis Dashboard",
    category: "Data Visualization",
    description:
      "An interactive sales dashboard that displays business performance through KPI cards, charts, PivotTables, and slicers.",
    tech: ["Excel", "Data Analysis"],
  },
  {
    number: "03",
    title: "Inventory Tracker",
    category: "Inventory Management",
    description:
      "An inventory tracking solution for monitoring stock movements, product quantities, and reorder requirements.",
    tech: ["Excel", "Formulas"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          Dev<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              Aspiring Frontend Developer
            </p>

            <h1>
              Hi, I'm <span className="gradient-text">Ruben</span>
              <br />
              I build things for the web.
            </h1>

            <p className="hero-description">
              I'm a developer who enjoys solving problems and
              creating useful applications. I'm currently expanding
              my programming skills into frontend development with
              JavaScript and React.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore Projects ↗
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/ruben-dev-vibe" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href="https://linkedin.com/in/ruben-magsayo-radaza-jr-98471144a/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-card">
              <div className="code-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>developer.js</span>
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="indent">
                  name: <span className="code-green">"Ruben"</span>,
                </p>
                <p className="indent">
                  role: <span className="code-green">"Frontend Developer"</span>,
                </p>
                <p className="indent">
                  skills: [
                </p>
                <p className="indent double">
                  <span className="code-yellow">"HTML"</span>,
                </p>
                <p className="indent double">
                  <span className="code-yellow">"CSS"</span>,
                </p>
                <p className="indent double">
                  <span className="code-yellow">"JavaScript"</span>,
                </p>
                <p className="indent double">
                  <span className="code-yellow">"React"</span>
                </p>
                <p className="indent">],</p>
                <p className="indent">
                  learning: <span className="code-green">true</span>,
                </p>
                <p className="indent">
                  motivated: <span className="code-green">true</span>
                </p>
                <p>{"}"}</p>
              </div>
            </div>

            <div className="floating-badge">
              ⚡ Always Learning
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section about" id="about">
          <div className="section-heading">
            <p className="eyebrow">Get to know me</p>
            <h2>
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="about-content">
            <article className="about-card">
              <div className="about-icon">💻</div>
              <h3>My Journey</h3>
              <p>
                I have experience building practical projects
                using Excel automation and C#. I'm now learning
                frontend development and exploring how to build
                modern web applications.
              </p>
            </article>

            <article className="about-card">
              <div className="about-icon">🎯</div>
              <h3>My Goal</h3>
              <p>
                My goal is to become a Junior Frontend Developer,
                contribute to real-world projects, and continue
                growing through hands-on development experience.
              </p>
            </article>

            <article className="about-card">
              <div className="about-icon">🚀</div>
              <h3>My Mindset</h3>
              <p>
                I enjoy learning new technologies, solving
                problems, and turning ideas into practical
                applications. I'm always looking for opportunities
                to improve my skills.
              </p>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section skills" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Technologies and tools</p>
            <h2>
              My <span className="gradient-text">Skills</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span className="skill-symbol">✦</span>
                {skill}
              </div>
            ))}
          </div>

          <p className="skills-note">
            Currently learning and improving my frontend development skills.
          </p>
        </section>

        {/* Projects Section */}
        <section className="section projects" id="projects">
          <div className="section-heading">
            <p className="eyebrow">My recent work</p>
            <h2>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-description">
              Projects I've worked on while exploring programming,
              automation, and application development.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-preview">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-preview-icon">
                    {project.number === "01"
                      ? "🛒"
                      : project.number === "02"
                      ? "📊"
                      : "📦"}
                  </span>

                  <span className="preview-label">
                    {project.category}
                  </span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href="https://github.com/YOUR-USERNAME/YOUR-REPOSITORY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗ 
                    </a>

                    <a
                      href="https://YOUR-DEPLOYED-WEBSITE.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact" id="contact">
          <div className="contact-card">
            <p className="eyebrow">What's next?</p>

            <h2>
              Let's build something{" "}
              <span className="gradient-text">great.</span>
            </h2>

            <p>
              I'm open to junior frontend developer opportunities,
              collaborations, and learning experiences.
            </p>

            <a
              href="mailto:rubenmagsayoradazajr@gmail.com"
              className="btn btn-primary"
            >
              Email Me ↗
            </a>

            <div className="contact-details">
              <span>📍 Philippines</span>
              <span>✉ rubenmagsayoradazajr@gmail.com</span>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/ruben-dev-vibe"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/ruben-magsayo-radaza-jr-98471144a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">
          Dev<span>.</span>
        </a>

        <p>Designed and built with React.</p>

        <p>
          © {new Date().getFullYear()} Ruben. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

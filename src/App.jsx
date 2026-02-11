import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Award, Briefcase, GraduationCap, ChevronDown, Terminal, Sparkles, Rocket, Zap } from 'lucide-react';
import './App.css';

// Portfolio Data - Easy to edit
const portfolioData = {
  personal: {
    name: "Hari Charan Bonam",
    title: "MERN Stack Developer",
    email: "haricharanbonam@gmail.com",
    phone: "+91 8328044665",
    location: "Bhimavaram",
    tagline: "Crafting Digital Experiences That Matter",
    bio: "Computer Science undergraduate with hands-on experience in MERN stack development within a real-world product development environment. Strong exposure to backend systems, REST API development, database design, and application testing."
  },
  
  socials: {
    github: "https://github.com/haricharan2507",
    linkedin: "https://www.linkedin.com/in/hari-charan-bonam",
    leetcode: "https://leetcode.com/u/haricharanbonam",
    codechef: "https://www.codechef.com/users/haricharan2507",
    hackerrank: "https://www.hackerrank.com/haricharanbonam"
  },

  skills: {
    languages: ["Python", "JavaScript", "Java", "C", "SQL"],
    webTech: ["HTML", "CSS", "React", "Node.js", "Express.js"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Postman", "SQL Workbench"],
    concepts: ["OOP", "DSA", "REST APIs"]
  },

  education: [
    {
      degree: "B.Tech (Computer Science and Engineering)",
      institution: "SRKR Engineering College, Bhimavaram",
      duration: "2023 – 2027",
      score: "CGPA: 9.26"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Veda Junior College",
      duration: "2021 – 2023",
      score: "Marks: 968/1000"
    },
    {
      degree: "SSC (Class 10)",
      institution: "Narayana High School",
      duration: "2020 – 2021",
      score: "Marks: 591/600"
    }
  ],

  experience: [
    {
      role: "MERN Stack Developer",
      company: "GenZ Galaxy Tech Solutions, Hyderabad",
      duration: "July 2025 – Present",
      highlights: [
        "Developed key features for the company's product including CRM dashboards, client-facing gallery modules with sharing functionality, and the main landing page using React and Node.js",
        "Contributed to both frontend (JavaScript) and backend (TypeScript) development, implementing controller logic, schema design, and REST API integration using Express.js and MongoDB",
        "Conducted comprehensive competitor analysis research on similar platforms to identify feature gaps and inform product roadmap decisions",
        "Actively involved in end-to-end testing workflows, bug identification, validation, and quality assurance before deployment",
        "Collaborated using Git-based version control and followed industry-standard development practices in a team environment"
      ]
    }
  ],

  projects: [
    {
      name: "BlogX",
      description: "Full-stack blogging platform with secure authentication, email verification, and interest-based content curation",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      highlights: [
        "Built secure authentication with email verification",
        "Implemented dynamic Markdown post creation and profile customization",
        "Added real-time comments, likes, and social interactions (follow/unfollow)",
        "Optimized MongoDB queries improving content load times by 30%"
      ],
      github: "https://github.com/haricharanbonam/blog",
      live: null
    },
    {
      name: "Exam Portal",
      description: "Online examination system with AI-powered cheating detection using YOLO-based object recognition",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Python", "Flask", "YOLO"],
      highlights: [
        "Architected examination system with AI-powered cheating detection",
        "Developed Python Flask backend for real-time camera surveillance",
        "Designed MongoDB pipeline to capture test responses and student activity logs",
        "Integrated YOLO for anomaly detection during exams"
      ],
      github: "https://github.com/haricharanbonam/exam",
      live: null,
      status: "Ongoing"
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills",
      tech: ["React", "CSS"],
      highlights: [
        "Responsive design with modern UI/UX",
        "Interactive animations and transitions",
        "Optimized performance"
      ],
      github: "https://github.com/haricharanbonam/whoami",
      live: null
    }
  ],

  achievements: [
    "Earned 4★ rating in C, Java, Python, and SQL on HackerRank platform",
    "2nd Place — Code Wars, SPURTHI 2K25, organized by CSE Department, SRKREC",
    "5th Place — Hack 'N' Clash 2025 Coding Contest, conducted by CSI, SRKREC"
  ],

  certifications: [
    {
      name: "Postman API Student Expert",
      issuer: "Postman",
      date: "Feb 2025"
    },
    {
      name: "Data Structures and Algorithms using Python",
      issuer: "NPTEL",
      date: "Mar 2025"
    },
    {
      name: "Introduction to C & Python Essentials",
      issuer: "Cisco",
      date: "Feb 2024, Dec 2024"
    },
    {
      name: "Employee Salary Prediction Project",
      issuer: "ML XPLORE Workshop by ACE",
      date: "Jan 2025",
      description: "Developed a supervised machine learning regression model using Python, Scikit-learn, Pandas, and NumPy to forecast employee salaries, achieving 92% prediction accuracy"
    },
    {
      name: "Green Internship Program",
      issuer: "1M1B Foundation",
      date: "May–June 2025"
    }
  ]
};

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

// Terminal Effect Component
const TerminalText = () => {
  const [text, setText] = useState('');
  const fullText = '> Building innovative web solutions...';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="terminal-text">
      {text}
      <span className="cursor-blink">|</span>
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <Code2 size={24} />
            <span>HC</span>
          </div>
          <div className="nav-links">
            <a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <ParticleBackground />
        <div className="hero-glow" style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }} />
        
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Available for opportunities</span>
            </div>
            
            <h1 className="hero-name">
              <span className="name-line">Hi, I'm</span>
              <span className="name-highlight">{portfolioData.personal.name}</span>
            </h1>
            
            <div className="hero-roles">
              <div className="role-item">
                <Terminal size={20} />
                <span>Full Stack Developer</span>
              </div>
              <div className="role-divider"></div>
              <div className="role-item">
                <Code2 size={20} />
                <span>MERN Specialist</span>
              </div>
              <div className="role-divider"></div>
              <div className="role-item">
                <Rocket size={20} />
                <span>Problem Solver</span>
              </div>
            </div>

            <p className="hero-tagline">{portfolioData.personal.tagline}</p>

            <TerminalText />

            <div className="hero-cta">
              <button className="cta-primary" onClick={() => scrollToSection('projects')}>
                <Zap size={20} />
                View Projects
                <div className="button-shine"></div>
              </button>
              <button className="cta-secondary" onClick={() => scrollToSection('contact')}>
                Let's Talk
                <ExternalLink size={18} />
              </button>
            </div>

            <div className="hero-stats-mini">
              <div className="stat-mini">
                <span className="stat-mini-number">9.26</span>
                <span className="stat-mini-label">CGPA</span>
              </div>
              <div className="stat-mini">
                <span className="stat-mini-number">3+</span>
                <span className="stat-mini-label">Projects</span>
              </div>
              <div className="stat-mini">
                <span className="stat-mini-number">4★</span>
                <span className="stat-mini-label">HackerRank</span>
              </div>
            </div>
          </div>

          <div className="hero-image-section">
            <div className="floating-card card-1">
              <Code2 size={32} />
              <span>React</span>
            </div>
            <div className="floating-card card-2">
              <Terminal size={32} />
              <span>Node.js</span>
            </div>
            <div className="floating-card card-3">
              <Award size={32} />
              <span>MongoDB</span>
            </div>
            <div className="image-placeholder">
              <div className="code-snippet">
                <div className="code-line"><span className="code-keyword">const</span> developer = {'{'}</div>
                <div className="code-line">  name: <span className="code-string">"{portfolioData.personal.name}"</span>,</div>
                <div className="code-line">  role: <span className="code-string">"MERN Stack"</span>,</div>
                <div className="code-line">  passion: <span className="code-string">"Building Cool Stuff"</span></div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-bio">{portfolioData.personal.bio}</p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">9.26</div>
                  <div className="stat-label">CGPA</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4★</div>
                  <div className="stat-label">HackerRank</div>
                </div>
              </div>
            </div>
            <div className="about-education">
              <h3><GraduationCap size={24} /> Education</h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-details">
                    <span>{edu.duration}</span>
                    <span className="edu-score">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="exp-company"><Briefcase size={16} /> {exp.company}</p>
                </div>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <ul className="exp-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                {project.status && <span className="project-status">{project.status}</span>}
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-items">
                {portfolioData.skills.languages.map((skill, index) => (
                  <div key={index} className="skill-orb" style={{ animationDelay: `${index * 0.05}s` }}>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Technologies</h3>
              <div className="skill-items">
                {portfolioData.skills.webTech.map((skill, index) => (
                  <div key={index} className="skill-orb" style={{ animationDelay: `${index * 0.05}s` }}>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-items">
                {portfolioData.skills.databases.map((skill, index) => (
                  <div key={index} className="skill-orb" style={{ animationDelay: `${index * 0.05}s` }}>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                {[...portfolioData.skills.tools, ...portfolioData.skills.concepts].map((skill, index) => (
                  <div key={index} className="skill-orb" style={{ animationDelay: `${index * 0.05}s` }}>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="section achievements-section">
        <div className="container">
          <div className="achievements-grid">
            <div className="achievements-block">
              <h2><Award size={28} /> Achievements</h2>
              <ul className="achievements-list">
                {portfolioData.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="certifications-block">
              <h2><Award size={28} /> Certifications</h2>
              <div className="certifications-list">
                {portfolioData.certifications.map((cert, index) => (
                  <div key={index} className="cert-item">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} • {cert.date}</p>
                    {cert.description && <p className="cert-desc">{cert.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={24} />
                <a href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
              </div>
              <div className="contact-item">
                <Phone size={24} />
                <a href={`tel:${portfolioData.personal.phone}`}>{portfolioData.personal.phone}</a>
              </div>
              <div className="contact-item">
                <MapPin size={24} />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
            <div className="contact-socials">
              <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="social-card">
                <Github size={32} />
                <span>GitHub</span>
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-card">
                <Linkedin size={32} />
                <span>LinkedIn</span>
              </a>
              <a href={portfolioData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="social-card">
                <Code2 size={32} />
                <span>LeetCode</span>
              </a>
              <a href={portfolioData.socials.hackerrank} target="_blank" rel="noopener noreferrer" className="social-card">
                <Award size={32} />
                <span>HackerRank</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 {portfolioData.personal.name}. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
'use client';

import { useRef, useEffect, useState } from 'react';
import {
  Code2,
  Terminal,
  Rocket,
  Sparkles,
  Zap,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Users,
  Mail,
  Phone,
  MapPin,
  Award,
  Computer
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

interface Experience {
  role: string;
  caption?: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  duration: string;
  highlights: string[];
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  live?: string;
  status?: string;
}

interface SkillItem {
  name: string;
  icon?: string; // devicon class
}

interface Skills {
  languages: SkillItem[];
  webTech: SkillItem[];
  databases: SkillItem[];
  tools: SkillItem[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

interface PortfolioData {
  personal: {
    name: string;
    tagline: string;
    bio: string;
    title:string;
    email: string;
    phone: string;
    location: string;
  };
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    hackerrank: string;
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  achievements: string[];
  certifications: Certification[];
}

// ─── Portfolio Data ───────────────────────────────────────────────────────────
// ✏️  Fill in all your real info below — this is the only object you need to edit.

const portfolioData:PortfolioData = {
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
    github: "https://github.com/haricharanbonam",
    linkedin: "https://www.linkedin.com/in/haricharanbonam",
    leetcode: "https://leetcode.com/u/haricharanbonam",
    hackerrank: "https://www.hackerrank.com/haricharanbonam"
  },

  skills: {
    languages: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
    webTech: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
    ],
    databases: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
    tools: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-plain" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "CI/CD", icon: "devicon-githubactions-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
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
      role: "Founding Engineer (MERN Stack)",
      caption: "Founding Engineer",
      company: "GenZ Galaxy Tech Solutions, Hyderabad",
      companyUrl: "https://plexis.in",
      companyLogo: "https://crm-client-main-branch.vercel.app/assets/logo-CtWZqSaM.png",
      duration: "July 2025 – Present",
      highlights: [
        "Developed and owned full-stack features across 10+ modules of Plexis, an AI-powered CRM platform, including dashboard, lead forms, gallery, and client management using the MERN stack",
        "Eliminated 10+ redundant API calls through a targeted codebase audit, reducing network overhead and improving backend response efficiency",
        "Sole developer on the gallery module — implemented lazy-loading with thumbnail previews and perceptual hashing, reducing load time from ~30s to under 3s (~90% improvement)",
        "Integrated AWS Rekognition for Facial Recognition — built an indexed face-matching pipeline using AWS Rekognition to enable identity verification within the platform",
        "Conducted competitor analysis and feature gap research to inform product decisions; contributed to Agile sprint planning with weekend deployment cycles"
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
      status: "Ongoing"
    },
    {
      name: "Harcel",
      description: "Lightweight deployment platform — deploy static sites and React apps in seconds from GitHub or file upload, with auto-generated public URLs",
      tech: ["React", "Vite", "Node.js", "Express.js"],
      highlights: [
        "Deploy from public GitHub repos or direct file upload in one click",
        "Supports HTML and React (Vite) project types with build pipeline",
        "Auto-generates unique site IDs and public deployment URLs",
        "Clean deployment progress UI with copy/open URL functionality"
      ],
      github: "https://github.com/haricharanbonam/harcel",
      live: "https://harcel.vercel.app",
    },
    {
      name: "GPT Hashtag Templates",
      description: "Chrome extension that supercharges ChatGPT with instant reusable prompt templates triggered by typing # in the input box",
      tech: ["JavaScript", "Chrome Extensions MV3", "Chrome Storage API", "CSS"],
      highlights: [
        "Trigger saved templates instantly by typing # — filter as you type",
        "Add, edit, delete templates via a clean modal UI",
        "Keyboard navigation support for fast template selection",
        "Ships with starter templates: brainstorm, debug, teach, review, and more"
      ],
      github: "https://github.com/haricharanbonam/gpt-extension",
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills",
      tech: ["Next.js", "TypeScript", "CSS"],
      highlights: [
        "Responsive design with modern UI/UX and particle animations",
        "Interactive micro-animations and smooth scroll transitions",
        "SEO-optimized with semantic HTML and meta tags"
      ],
      github: "https://github.com/haricharanbonam/whoami",
      live: "http://haricharanbonam.tech/",
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

// ─── Particle Background ──────────────────────────────────────────────────────

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface ParticleObj {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      update: () => void;
      draw: () => void;
    }

    const particles: ParticleObj[] = [];
    const particleCount = 80;

    class Particle implements ParticleObj {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

// ─── Terminal Text ────────────────────────────────────────────────────────────

const TerminalText: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = '> Building innovative web solutions...';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="terminal-text">
      {text}
      <span className="cursor-blink">|</span>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic navbar highlight via IntersectionObserver
    // rootMargin fires when section top enters the viewport's middle band
    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-10% 0px -45% 0px',
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
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
  {(['home', 'about', 'experience', 'projects', 'skills', 'contact', 'blogs'] as const).map(
    (section) =>
      section === 'blogs' ? (
        <a
          key={section}
          href="/blogs"
          className={activeSection === section ? 'active' : ''}
        >
          Blogs
        </a>
      ) : (
        <a
          key={section}
          onClick={() => scrollToSection(section)}
          className={activeSection === section ? 'active' : ''}
          style={{ cursor: 'pointer' }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      )
  )}
</div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <ParticleBackground />
        <div
          className="hero-glow"
          style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        />

        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Available for opportunities</span>
            </div>

            <h1 className="hero-name">
              <span className="name-line">Hi, I&apos;m</span>
              <span className="name-highlight">{portfolioData.personal.name}</span>
            </h1>

            <div className="hero-roles">
              <div className="role-item">
                <Terminal size={20} />
                <span>Full Stack Developer</span>
              </div>
              <div className="role-divider" />
              <div className="role-item">
                <Code2 size={20} />
                <span>MERN Specialist</span>
              </div>
              <div className="role-divider" />
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
                <div className="button-shine" />
              </button>
              <button className="cta-secondary" onClick={() => scrollToSection('contact')}>
                Let&apos;s Talk
                <ExternalLink size={18} />
              </button>
            </div>

            <div className="hero-stats-mini">
              <div className="stat-mini">
                <span className="stat-mini-number">1000+</span>
                <span className="stat-mini-label">Problems Solved</span>
              </div>
              <div className="stat-mini">
                <span className="stat-mini-number">5+</span>
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
                <div className="code-line">
                  <span className="code-keyword">const</span> developer = {'{'}
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;name:{' '}
                  <span className="code-string">&quot;{portfolioData.personal.name}&quot;</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;role: <span className="code-string">&quot;MERN Stack&quot;</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;passion:{' '}
                  <span className="code-string">&quot;Building Cool Stuff&quot;</span>
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-bio">{portfolioData.personal.bio}</p>
              <div className="about-stats">
                {[
                  { number: '1000+', label: 'Problems Solved' },
                  { number: '5+', label: 'Projects' },
                  { number: '4★', label: 'HackerRank' },
                ].map((stat) => (
                  <div key={stat.label} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-education">
              <h3>
                <GraduationCap size={24} /> Education
              </h3>
              {portfolioData.education.map((edu, i) => (
                <div key={i} className="education-item">
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

      {/* Experience */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          {portfolioData.experience.map((exp, i) => (
            <div key={i} className="experience-card">
              <div className="exp-header">
                <div className="exp-header-left">
                  {exp.companyLogo && (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-logo-link">
                      <img src={exp.companyLogo} alt={exp.company} className="exp-logo" />
                    </a>
                  )}
                  <div>
                    <div className="exp-role-row">
                      <h3>{exp.role}</h3>
                      {exp.caption && <span className="exp-caption">{exp.caption}</span>}
                    </div>
                    <p className="exp-company">
                      <Briefcase size={16} />
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company-link">
                          {exp.company}
                        </a>
                      ) : exp.company}
                    </p>
                  </div>
                </div>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <ul className="exp-highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, i) => (
              <div
                key={i}
                className="project-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {project.status && (
                  <span className="project-status">{project.status}</span>
                )}
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="project-highlights">
                  {project.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
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

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="skills-container">
            {(
              [
                { label: 'Languages', key: 'languages' },
                { label: 'Web Technologies', key: 'webTech' },
                { label: 'Databases', key: 'databases' },
                { label: 'Tools & DevOps', key: 'tools' },
              ] as { label: string; key: keyof Skills }[]
            ).map(({ label, key }) => (
              <div key={key} className="skill-category">
                <h3>{label}</h3>
                <div className="skill-items">
                  {portfolioData.skills[key].map((skill, i) => (
                    <div key={i} className="skill-orb" style={{ animationDelay: `${i * 0.05}s` }}>
                      {skill.icon && <i className={`${skill.icon} skill-icon`}></i>}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="section achievements-section">
        <div className="container">
          <div className="achievements-grid">
            <div className="achievements-block">
              <h2>
                <Award size={28} /> Achievements
              </h2>
              <ul className="achievements-list">
                {portfolioData.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="certifications-block">
              <h2>
                <Award size={28} /> Certifications
              </h2>
              <div className="certifications-list">
                {portfolioData.certifications.map((cert, i) => (
                  <div key={i} className="cert-item">
                    <h4>{cert.name}</h4>
                    <p>
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.description && <p className="cert-desc">{cert.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let&apos;s Connect</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={24} />
                <a href={`mailto:${portfolioData.personal.email}`}>
                  {portfolioData.personal.email}
                </a>
              </div>
              <div className="contact-item">
                <Phone size={24} />
                <a href={`tel:${portfolioData.personal.phone}`}>
                  {portfolioData.personal.phone}
                </a>
              </div>
              <div className="contact-item">
                <MapPin size={24} />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
            <div className="contact-socials">
              {[
                { href: portfolioData.socials.github, icon: <Computer size={32} />, label: 'GitHub' },
                {
                  href: portfolioData.socials.linkedin,
                  icon: <Users size={32} />,
                  label: 'LinkedIn',
                },
                {
                  href: portfolioData.socials.leetcode,
                  icon: <Code2 size={32} />,
                  label: 'LeetCode',
                },
                {
                  href: portfolioData.socials.hackerrank,
                  icon: <Award size={32} />,
                  label: 'HackerRank',
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 {portfolioData.personal.name}. Built with Next.js.</p>
      </footer>
    </div>
  );
}
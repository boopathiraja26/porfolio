import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRefs = useRef([]);

  // Portfolio data
  const portfolioData = {
    hero: {
      name: "BOOPATHIRAJA N",
      subtitle: "And I'm a ",
      description: "Highly motivated Information Technology graduate seeking an entry-level position in a dynamic IT environment to apply strong foundational knowledge in programming, problem-solving, and Software Testing.",
      socialLinks: [
        { href: "https://www.linkedin.com/in/boopathi-raja-306523392", icon: "fa-linkedin", label: "LinkedIn" },
        { href: "https://github.com/boopathiraja26", icon: "fa-github", label: "GitHub" },
        { href: "https://www.instagram.com/b6_yeager.ist?igsh=cTBueGduY3ZzcDg3&utm_source=qr", icon: "fa-instagram", label: "Instagram" },
        { href: "https://x.com/boopathiraja26", icon: "fa-x-twitter", label: "X (Twitter)" }
      ]
    },
    about: {
      title: "About Me",
      content: [
        `I'm <strong>Boopathiraja N</strong>, a B.Tech Information Technology student at J.K.K. Munirajah College of Technology, T.N. Palayam (CGPA up to 6th Sem: 7.5). I'm passionate about building web applications and solving real-world problems through technology.`,
        `My expertise spans frontend development with React.js and backend development with Python, along with hands-on experience in database management using PostgreSQL.`
      ],
      info: [
        { icon: "fa-phone", text: "+91 9003726561", isLink: false },
        { icon: "fa-linkedin", text: "LinkedIn Profile", isLink: true, href: "https://www.linkedin.com/in/boopathi-raja-306523392" },
        { icon: "fa-envelope", text: "boopathiraja26ab@gmail.com", isLink: false },
        { icon: "fa-github", text: "github.com/boopathiraja26", isLink: true, href: "https://github.com/boopathiraja26" },
        { icon: "fa-graduation-cap", text: "B.Tech IT (2022–2026)", isLink: false },
        { icon: "fa-instagram", text: "Instagram Profile", isLink: true, href: "https://www.instagram.com/b6_yeager.ist?igsh=cTBueGduY3ZzcDg3&utm_source=qr" }
      ]
    },
    skills: {
      title: "My Skills",
      categories: [
        {
          title: "Frontend",
          icon: "fa-code",
          tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"]
        },
        {
          title: "Backend",
          icon: "fa-server",
          tags: ["Python", "ASP.NET Web API", "REST APIs"]
        },
        {
          title: "Database",
          icon: "fa-database",
          tags: ["PostgreSQL", "SQL"]
        },
        {
          title: "Tools & Others",
          icon: "fa-wrench",
          tags: ["Git", "GitHub", "OpenCV", "IoT", "Software Testing"]
        }
      ]
    },
    projects: [
      {
        icon: "fa-camera",
        title: "Camera Based Crowd Analytics & Object Detection",
        description: "Developed a real-time vision system using Python and OpenCV to detect objects and analyze crowd density with high accuracy for monitoring and safety applications.",
        tags: ["Python", "OpenCV", "Computer Vision", "Real-time"]
      },
      {
        icon: "fa-graduation-cap",
        title: "Campus Core – Student Management System",
        description: "Developed a full-stack web application with ASP.NET Web API backend and PostgreSQL database, integrated with a React.js frontend for managing student records and parent records efficiently.",
        tags: ["React.js", "ASP.NET", "PostgreSQL", "Full Stack"]
      }
    ],
    internships: [
      {
        company: "Litz Technologies",
        role: "Full Stack Web Development Intern",
        duration: "July 2025 | 15 Days",
        description: "Completed a 15-days Full Stack Web Development program focused on front-end and full-stack web development using industry-standard tools and technologies."
      },
      {
        company: "Nxt Gen Solution, Erode",
        role: "IoT Intern",
        duration: "7 Days",
        description: "Completed a 7-day internship in Internet of Things (IoT), learning sensor integration and microcontroller basics. Developed and tested simple IoT prototypes during the program."
      }
    ],
    education: [
      {
        year: "2022 – 2026",
        title: "B.Tech Information Technology",
        institution: "J.K.K. Munirajah College Of Technology, T.N. Palayam",
        grade: "CGPA: 7.5 (up to 7th Sem)",
        icon: "fa-university"
      },
      {
        year: "2021 – 2022",
        title: "HSC (Higher Secondary)",
        institution: "Govt Model HR Sec School, Mathur",
        grade: "Score: 60%",
        icon: "fa-school"
      },
      {
        year: "2019 – 2020",
        title: "SSLC (Secondary School)",
        institution: "Govt Model HR Sec School, Mathur",
        grade: "Score: 65%",
        icon: "fa-book"
      }
    ],
    contact: {
      title: "Contact Me",
      subtitle: "Let's Connect",
      description: "I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi — feel free to reach out!",
      details: [
        { icon: "fa-phone", text: "+91 9003726561", href: "tel:+919003726561" },
        { icon: "fa-envelope", text: "boopathiraja26ab@gmail.com", href: "mailto:boopathiraja26ab@gmail.com" },
        { icon: "fa-linkedin", text: "LinkedIn", href: "https://www.linkedin.com/in/boopathi-raja-306523392" },
        { icon: "fa-github", text: "GitHub", href: "https://github.com/boopathiraja26" }
      ]
    }
  };

  // Initialize Typed.js
  useEffect(() => {
    const typed = new Typed('.typing-text', {
      strings: ['IT Graduate', 'Frontend Developer', 'Python Developer', 'Problem Solver'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Scroll animations and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 400);

      // Active section detection
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const scrollElements = document.querySelectorAll(
      '.scroll-hidden, .slide-left-hidden, .slide-right-hidden, .scale-hidden, .stagger-children, .section-title'
    );

    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Antigravity: 3D Tilt Effect
  useEffect(() => {
    const tiltCards = document.querySelectorAll(
      '.project-card, .skill-category, .education-card, .internship-card'
    );

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotX = -dy * 12;
      const rotY = dx * 12;
      card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-10px) scale(1.03)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = '';
    };

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    return () => {
      tiltCards.forEach((card) => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  // Antigravity: Magnetic Button Effect
  useEffect(() => {
    const magnetBtns = document.querySelectorAll('.btn, .cvbtn, .submit-btn');
    const RADIUS = 80;

    const handleMouseMove = (e, btn) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < RADIUS) {
        const pull = (RADIUS - dist) / RADIUS;
        btn.style.transform = `translate(${dx * pull * 0.35}px, ${dy * pull * 0.35}px)`;
      } else {
        btn.style.transform = '';
      }
    };

    const handleMouseLeave = (btn) => {
      btn.style.transform = '';
    };

    magnetBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => handleMouseMove(e, btn));
      btn.addEventListener('mouseleave', () => handleMouseLeave(btn));
    });

    return () => {
      magnetBtns.forEach((btn) => {
        btn.removeEventListener('mousemove', (e) => handleMouseMove(e, btn));
        btn.removeEventListener('mouseleave', () => handleMouseLeave(btn));
      });
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Header */}
      <header>
        <nav className="navbar">
          <a href="#home" className="logo" style={{"--i": 1}}>
            BOOPA<span>THIRAJA N</span>
          </a>
          <ul>
            {['home', 'about', 'skills', 'projects', 'internship', 'education', 'contact'].map((section, index) => (
              <li key={section} style={{"--i": index + 2}}>
                <a 
                  href={`#${section}`} 
                  className={activeSection === section ? 'active' : ''}
                  onClick={(e) => scrollToSection(e, `#${section}`)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <a href="resume.pdf" className="cvbtn" style={{"--i": 9}} download="Boopathiraja_N_Resume.pdf">
            Download CV <i className="fa-solid fa-download"></i>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home">
        <div className="hero-content">
          <h3 style={{"--i": 1}}>Hello, I'm</h3>
          <h1 style={{"--i": 2}}>{portfolioData.hero.name}</h1>
          <h2 style={{"--i": 3}}>{portfolioData.hero.subtitle}<span className="typing-text"></span></h2>
          <p style={{"--i": 4}}>{portfolioData.hero.description}</p>
          <div className="social-icons" style={{"--i": 5}}>
            {portfolioData.hero.socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" aria-label={link.label}>
                <i className={`fa-brands ${link.icon}`}></i>
              </a>
            ))}
          </div>
          <div className="hero-btn" style={{"--i": 6}}>
            <a href="#projects" className="btn" onClick={(e) => scrollToSection(e, '#projects')}>My Projects</a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => scrollToSection(e, '#contact')}>Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="for linkedin  profile.jpg" alt="Boopathiraja N" />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about-content stagger-children">
          <h2 className="section-title" style={{textAlign: "center", marginBottom: "1.5rem"}}>
            About <span>Me</span>
          </h2>
          {portfolioData.about.content.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          <div className="about-info">
            {portfolioData.about.info.map((item, index) => (
              <div key={index} className="about-info-item">
                <i className={`fa-solid ${item.icon}`}></i>
                {item.isLink ? (
                  <a href={item.href} target="_blank">{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
          <div className="hero-btn">
            <a href="#contact" className="btn" onClick={(e) => scrollToSection(e, '#contact')}>Hire Me</a>
            <a href="resume.pdf" className="btn btn-outline" download="Boopathiraja_N_Resume.pdf">Download CV</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title scroll-hidden">My <span>Skills</span></h2>
        <div className="skills-grid stagger-children">
          {portfolioData.skills.categories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-title">
                <i className={`fa-solid ${category.icon}`}></i>
                {category.title}
              </div>
              <div className="skill-tags">
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title scroll-hidden">My <span>Projects</span></h2>
        <div className="projects-grid stagger-children">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                <i className={`fa-solid ${project.icon}`}></i>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship">
        <h2 className="section-title scroll-hidden">My <span>Internship</span></h2>
        <div className="internship-timeline">
          {portfolioData.internships.map((internship, index) => (
            <div key={index} className="internship-item scroll-hidden">
              <div className="internship-card">
                <div className="company">
                  <i className="fa-solid fa-building"></i> {internship.company}
                </div>
                <div className="role">{internship.role}</div>
                <div className="duration">
                  <i className="fa-regular fa-calendar"></i> {internship.duration}
                </div>
                <p>{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="section-title scroll-hidden">My <span>Education</span></h2>
        <div className="education-grid stagger-children">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="edu-icon">
                <i className={`fa-solid ${edu.icon}`}></i>
              </div>
              <span className="year">{edu.year}</span>
              <h3>{edu.title}</h3>
              <div className="institution">{edu.institution}</div>
              <div className="grade">{edu.grade}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="section-title scroll-hidden">Contact <span>Me</span></h2>
        <div className="contact-wrapper">
          <div className="contact-info slide-left-hidden">
            <h3>Let's <span>Connect</span></h3>
            <p>{portfolioData.contact.description}</p>
            <div className="contact-details">
              {portfolioData.contact.details.map((detail, index) => (
                <div key={index} className="contact-detail-item">
                  <i className={`fa-solid ${detail.icon}`}></i>
                  <a href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined}>
                    {detail.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form slide-right-hidden" action="#" method="POST">
            <input type="text" className="form-input" placeholder="Full Name" required />
            <input type="email" className="form-input" placeholder="Email Address" required />
            <input type="tel" className="form-input" placeholder="Phone Number" />
            <input type="text" className="form-input" placeholder="Subject" />
            <textarea className="form-input full-width" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">
              <span>Send Message &nbsp;<i className="fa-solid fa-paper-plane"></i></span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          &copy; 2026 <span>Boopathiraja N</span>. All rights reserved. &nbsp;|&nbsp;
          Built with <span>❤</span> using HTML, CSS & JavaScript
        </p>
      </footer>

      {/* Scroll to Top Button */}
      <div 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default App;

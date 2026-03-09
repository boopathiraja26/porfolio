// ===================== TYPED.JS =====================
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['IT Graduate', 'Frontend Developer', 'Problem Solver','React-developer'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1200,
        loop: true,
    });
});


// ===================== SCROLL ANIMATIONS (IntersectionObserver) =====================
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll(
        '.scroll-hidden, .slide-left-hidden, .slide-right-hidden, .scale-hidden, .stagger-children, .section-title'
    );

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

    scrollElements.forEach((el) => observer.observe(el));
});


// ===================== ACTIVE NAV LINK ON SCROLL =====================
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => link.classList.remove('active'));
                    const activeLink = document.querySelector(`.navbar ul li a[href="#${entry.target.id}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        },
        { threshold: 0.4 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
});


// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// ===================== SCROLL TO TOP BUTTON =====================
document.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


// ===================== ANTIGRAVITY: 3D TILT EFFECT =====================
document.addEventListener('DOMContentLoaded', () => {
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
      
      card.style.transition = 'transform 0.1s ease-out'; // overrides slow CSS transition for immediate tracking
      card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-10px) scale(1.03)`;
    };
  
    const handleMouseLeave = (card) => {
      card.style.transition = 'all 0.3s ease'; // restores normal transition on un-hover
      card.style.transform = '';
    };
  
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
});
  
  
// ===================== ANTIGRAVITY: MAGNETIC BUTTON EFFECT =====================
document.addEventListener('DOMContentLoaded', () => {
    const magnetBtns = document.querySelectorAll('.btn, .cvbtn, .submit-btn');
    const RADIUS = 100; // Increased radius to feel the pull earlier
  
    // Listen on the document so buttons pull even before hovering exactly over them
    document.addEventListener('mousemove', (e) => {
      magnetBtns.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
    
        if (dist < RADIUS) {
          const pull = (RADIUS - dist) / RADIUS;
          btn.style.transition = 'transform 0.1s ease-out';
          btn.style.transform = `translate(${dx * pull * 0.35}px, ${dy * pull * 0.35}px)`;
        } else {
          // Reset when far away
          if (btn.style.transform !== '') {
            btn.style.transition = 'transform 0.3s ease-out';
            btn.style.transform = '';
          }
        }
      });
    });
});
  

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

// Typing Animation
const roles = ["Product Manager", "AI Enthusiast", "Problem Solver", "Product Analyst"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000;

function typeText() {
    const dynamicText = document.querySelector('.dynamic-text');
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = erasingDelay;
    } else {
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 200;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeText, typingDelay);
}

// Project Data
const projects = [
    {
        title: "Zomato Product Teardown & UX Optimization",
        description: "Analyzed Zomato's user experience, identified pain points, and proposed optimizations to improve engagement and retention.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
        link: "https://drive.google.com/file/d/131Mh4BTj3m1d8T21MVvByOAAI0DDpk8S/view?usp=sharing",
        tags: ["Product Analysis", "UX Design", "User Research"]
    },
    {
        title: "Dating App Wireframing & Hi-Fi Prototype",
        description: "Designed an intuitive dating app with a focus on seamless user onboarding and AI-driven matchmaking.",
        image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&auto=format&fit=crop",
        link: "https://drive.google.com/file/d/1LC-eiMDHQPjnHw9EQEMU5vAbupMnyQXI/view?usp=sharing",
        tags: ["UI/UX", "Prototyping", "Figma"]
    },
    {
        title: "Quick Commerce Apps Analysis",
        description: "Studied customer journeys of Indian quick commerce platforms and identified friction points in conversion funnels.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop",
        link: "https://drive.google.com/file/d/1RCN2dCJsrbLQViuli6KMC0dmfbqoFScS/view?usp=sharing",
        tags: ["Market Research", "User Journey", "Analytics"]
    },
    {
        title: "Football Dataset Analysis",
        description: "Explored and analyzed football datasets to extract meaningful insights using SQL queries.",
        image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800&auto=format&fit=crop",
        link: "https://drive.google.com/file/d/1GBhQyc5rCy4dPaVaBf6MY6_fqgZ0NFuH/view?usp=sharing",
        tags: ["Data Analysis", "SQL", "Visualization"]
    },
    {
        title: "Spotify Product Improvements",
        description: "Identified pain points in Spotify's experience and suggested innovative product enhancements.",
        image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&auto=format&fit=crop",
        link: "https://drive.google.com/file/d/1HU7vmi9B5HxZM1xY5d1O-sU-8hkFxe_q/view?usp=sharing",
        tags: ["Product Strategy", "UX Research", "Feature Design"]
    },
    {
        title: "Fintech App Design",
        description: "Led a team in building a fintech product for financial literacy and seamless banking experiences.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
        link: "https://drive.google.com/file/d/1ADZwyUqRO__0iAFk9CgQHn6irekNKERC/view?usp=sharing",
        tags: ["Fintech", "Product Design", "Team Leadership"]
    }
];

// Populate Projects
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i> View Project
                </a>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, newTextDelay);
    populateProjects();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add scroll reveal animation to skill bars
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(progress => {
    observer.observe(progress);
}); 
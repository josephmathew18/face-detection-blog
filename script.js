// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and times
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});

// Copy to clipboard functionality
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the adjacent pre/code element
        const codeElement = button.closest('.code-wrapper').querySelector('code');
        const textToCopy = codeElement.innerText;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Visual feedback
            const icon = button.querySelector('i');
            icon.classList.remove('fa-copy', 'fa-regular');
            icon.classList.add('fa-check', 'fa-solid');
            button.style.color = 'var(--accent-blue)';
            
            // Reset after 2 seconds
            setTimeout(() => {
                icon.classList.remove('fa-check', 'fa-solid');
                icon.classList.add('fa-copy', 'fa-regular');
                button.style.color = '#a8b2d1';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});

// Reveal elements on scroll (simple animation)
const revealElements = document.querySelectorAll('.card, .tech-item, .timeline-item');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial state for reveal elements
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
});

// Trigger once on load and then on scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

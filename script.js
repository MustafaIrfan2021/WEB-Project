/**
 * Modern Website JavaScript
 * Handles menu toggle, smooth scrolling, animations and parallax effects
 */

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            const mobileNav = document.getElementById('nav-links');
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        });
    });
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on initial load
});

// Parallax scrolling effect for hero section
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.2;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
}); 
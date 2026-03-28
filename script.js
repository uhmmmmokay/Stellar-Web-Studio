// script.js

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navUl.classList.toggle('active');
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 100);
    }
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            document.querySelectorAll(".faq-answer").forEach(item => {
                item.style.maxHeight = null;
            });
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// Copy email to clipboard + snackbar
const emailLinks = document.querySelectorAll('.footer-email-link, .contact-email a');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const emailText = link.textContent.trim();
        navigator.clipboard.writeText(emailText).then(() => {
            const snackbar = document.getElementById('snackbar');
            if (snackbar) {
                snackbar.classList.add('show');
                setTimeout(() => snackbar.classList.remove('show'), 3000);
            }
        }).catch(err => console.error('Failed to copy email:', err));
    });
});

// ── SIMPLE PROFESSIONAL SCROLL ANIMATIONS ──
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

const elementsToAnimate = document.querySelectorAll(
    '.hero-content, .hero-image, .feature-row, .approach-step, .portfolio-card, .blog-card, .package, .founder-container, .faq-item'
);

elementsToAnimate.forEach(el => animationObserver.observe(el));

// ── SMOOTH SCROLL TO SECTION + AUTO-CLOSE MOBILE MENU (NOW 100% RELIABLE) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default behavior immediately
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const header = document.querySelector('header');
            const headerOffset = header ? header.offsetHeight + 20 : 80;

            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Auto-close mobile menu
            if (hamburger && navUl && navUl.classList.contains('active')) {
                hamburger.classList.remove('active');
                navUl.classList.remove('active');
            }
        }
    });
});
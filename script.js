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

// Contact form demo
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        contactForm.reset();
    });
}

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
// ── MOBILE NAVBAR TOGGLE ──
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("hs-navbar-example-collapse");
    const navbar = document.getElementById("hs-navbar-example");

    if (toggleButton && navbar) {
        toggleButton.addEventListener("click", () => {
            const isOpen = toggleButton.getAttribute("aria-expanded") === "true";

            toggleButton.setAttribute("aria-expanded", String(!isOpen));

            navbar.classList.toggle("hidden");
        });

        // Close mobile menu when a navigation link is clicked
        navbar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth < 640) {
                    navbar.classList.add("hidden");
                    toggleButton.setAttribute("aria-expanded", "false");
                }
            });
        });
    }
});


// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.closest(".faq-item");
        const answer = question.nextElementSibling;
        const isOpen = item.classList.contains("active");

        // Close all
        document.querySelectorAll(".faq-item").forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector(".faq-answer").style.maxHeight = null;
        });

        // Open this one if it wasn't already open
        if (!isOpen) {
            item.classList.add("active");
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
    '.hero-content, .hero-image, .feature-row, .approach-step, .portfolio-card, .blog-card, .package, .founder-container, .faq-item, .what-container, .what-card, .what-right, .feature-card, .comparison-table-wrapper, .final-cta-inner'
);

elementsToAnimate.forEach(el => animationObserver.observe(el));

// ── SMOOTH SCROLL TO SECTION + AUTO-CLOSE MOBILE MENU ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

            if (hamburger && navUl && navUl.classList.contains('active')) {
                hamburger.classList.remove('active');
                navUl.classList.remove('active');
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("orderModal");
    const openBtn = document.getElementById("openOrderModal");
    const closeBtn = document.getElementById("closeOrderModal");

    if (!modal || !openBtn || !closeBtn) return;

    openBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("active");
        }
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        btn.disabled = true;
        btn.textContent = 'Sending...';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(form)
            });

            const result = await response.json();

            if (result.success) {
                window.location.href = 'contact_success.html';
            } else {
                alert(result.message || 'Something went wrong. Please try again.');
                btn.disabled = false;
                btn.textContent = originalText;
            }
        } catch (error) {
            alert('Network error. Please try again.');
            btn.disabled = false;
            btn.textContent = originalText;
        }
    });
}
    

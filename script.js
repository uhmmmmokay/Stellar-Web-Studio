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

        document.querySelectorAll(".faq-item").forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector(".faq-answer").style.maxHeight = null;
        });

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


// ── DESIGNS CAROUSEL (4 designs, 2 visible, auto-scroll by 1) ──
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("designsTrack");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");
    const dotsContainer = document.getElementById("carouselDots");

    if (!track) return;

    const slides = Array.from(track.children);
    const total = slides.length; // 4
    let currentIndex = 0;
    let autoTimer = null;
    const AUTO_INTERVAL = 4000;

    function getVisibleCount() {
        return window.innerWidth >= 640 ? 2 : 1;
    }

    function maxIndex() {
        return Math.max(0, total - getVisibleCount());
    }

    function update() {
        const visible = getVisibleCount();
        const percent = (100 / visible) * currentIndex;
        track.style.transform = `translateX(-${percent}%)`;

        // dots
        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll(".carousel-dot");
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentIndex);
            });
        }
    }

    function goTo(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex()));
        update();
    }

    function next() {
        if (currentIndex >= maxIndex()) {
            currentIndex = 0; // loop
        } else {
            currentIndex += 1;
        }
        update();
    }

    function prev() {
        if (currentIndex <= 0) {
            currentIndex = maxIndex();
        } else {
            currentIndex -= 1;
        }
        update();
    }

    // Build dots
    if (dotsContainer) {
        dotsContainer.innerHTML = "";
        for (let i = 0; i <= maxIndex(); i++) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "carousel-dot" + (i === 0 ? " active" : "");
            btn.setAttribute("aria-label", `Go to slide group ${i + 1}`);
            btn.addEventListener("click", () => {
                goTo(i);
                resetAuto();
            });
            dotsContainer.appendChild(btn);
        }
    }

    if (nextBtn) nextBtn.addEventListener("click", () => { next(); resetAuto(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); resetAuto(); });

    function startAuto() {
        stopAuto();
        autoTimer = setInterval(next, AUTO_INTERVAL);
    }
    function stopAuto() {
        if (autoTimer) clearInterval(autoTimer);
    }
    function resetAuto() {
        stopAuto();
        startAuto();
    }

    // Pause on hover
    const carousel = document.getElementById("designsCarousel");
    if (carousel) {
        carousel.addEventListener("mouseenter", stopAuto);
        carousel.addEventListener("mouseleave", startAuto);
    }

    // Recalculate on resize
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // rebuild dots for new visible count
            if (dotsContainer) {
                dotsContainer.innerHTML = "";
                for (let i = 0; i <= maxIndex(); i++) {
                    const btn = document.createElement("button");
                    btn.type = "button";
                    btn.className = "carousel-dot" + (i === currentIndex ? " active" : "");
                    btn.setAttribute("aria-label", `Go to slide group ${i + 1}`);
                    btn.addEventListener("click", () => {
                        goTo(i);
                        resetAuto();
                    });
                    dotsContainer.appendChild(btn);
                }
            }
            if (currentIndex > maxIndex()) currentIndex = maxIndex();
            update();
        }, 150);
    });

    update();
    startAuto();
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

            // safe check (hamburger/navUl may not exist)
            const hamburger = document.querySelector('.hamburger') || document.getElementById('hs-navbar-example-collapse');
            const navUl = document.querySelector('nav ul') || document.getElementById('hs-navbar-example');
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

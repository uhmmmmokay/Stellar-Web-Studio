function toggleMenu() {
    const nav = document.getElementById("nav");
    const hamburger = document.querySelector(".hamburger");
    
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
}

// Optional: Close menu when clicking a link (better mobile UX)
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        const nav = document.getElementById("nav");
        const hamburger = document.querySelector(".hamburger");
        nav.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(function() {
        element.style.color = '#4caf50';
        setTimeout(() => {
            element.style.color = '';
        }, 1000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

function showSlide(index) {
    document.getElementById('slideshow').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
        const ans = q.nextElementSibling;
        const isActive = ans.classList.contains('active');
        ans.classList.toggle('active', !isActive);
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Simple scroll animations - makes every section feel alive
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,        // triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll(
        '.service, .doctor, .insurance-item, .gallery-item, ' +
        '.price-card, .faq-item, .about, .before-after'
    );
    elements.forEach(el => observer.observe(el));
});

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.createElement('div');
        toast.textContent = 'Copied to clipboard!';
        toast.style.position = 'fixed';
        toast.style.bottom = '100px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = '#2196f3';
        toast.style.color = 'white';
        toast.style.padding = '14px 32px';
        toast.style.borderRadius = '50px';
        toast.style.boxShadow = '0 10px 30px rgba(33, 150, 243, 0.4)';
        toast.style.fontSize = '1rem';
        toast.style.fontWeight = '500';
        toast.style.zIndex = '99999';
        toast.style.whiteSpace = 'nowrap';
        toast.style.opacity = '0';
        toast.style.transition = 'all 0.4s ease';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(-15px)';
        }, 10);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 400);
        }, 2300);
    }).catch(() => {
        alert('✅ Copied: ' + text);   // fallback
    });
}
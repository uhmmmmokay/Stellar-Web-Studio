// Mobile menu toggle
const mobileBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    if (!mobileMenu.classList.contains('hidden')) {
        mobileBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        mobileBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
})

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }
    })
})

// Simple testimonial slider
let currentSlide = 0
const slidesContainer = document.getElementById('slides-container')
const totalSlides = 3
function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`
}
window.nextSlide = function() {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
}
window.prevSlide = function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    showSlide(currentSlide)
}
// Auto slide every 8 seconds
setInterval(() => {
    nextSlide()
}, 8000)

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === 'ArrowLeft') prevSlide()
})

// Copy to clipboard + snackbar
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const snackbar = document.getElementById('snackbar')
        snackbar.style.display = 'flex'
        snackbar.classList.remove('hidden')
        
        // Auto-hide after 2.5 seconds
        setTimeout(() => {
            snackbar.classList.add('hidden')
            snackbar.style.display = 'none'
        }, 2500)
    }).catch(() => {
        // Fallback for very old browsers (unlikely)
        console.log('Clipboard copy failed')
    })
}

// Scroll reveal animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            }
        })
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
    })

    document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.observe(section)
    })
}

// Initialize everything
window.onload = function() {
    initAnimations()
    showSlide(0)
    console.log('%cMark Gegaros Law Website – Ready for production deployment', 'color:#d4af37; font-family:monospace')
}
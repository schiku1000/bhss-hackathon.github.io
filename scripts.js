// FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
    const item = question.parentNode;
    item.classList.toggle('active');
    });
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
        
function nextSlide() {
    if (slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}
        
if (slides.length > 0) {
    setInterval(nextSlide, 3000);
}

// Smooth Scrolling For Navbar
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === 'schedule.html' || href.includes('.html')) {
            return;
        }
    
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
       
        else if (href.includes('#')) {
            return;
        }
    });
});

// Contact form submission with Web3Forms
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        const formData = new FormData(this);
        formData.append("access_key", "d2d1e743-898e-4471-aff3-69237e4e982a");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                alert('Thank you! Your message has been sent successfully. We will respond in 48 hours.');
                this.reset();
            } else {
                alert('Failed to send message. Please try again.');
                console.log('Error:', data);
            }
        } catch (error) {
            alert('Failed to send message. Please try again.');
            console.log('Error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// URL Cleaning
window.addEventListener('DOMContentLoaded', () => {
    // Remove .html from URL
    let currentPath = window.location.pathname;
    if (currentPath.endsWith('.html')) {
        const newPath = currentPath.replace('.html', '');
        window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
    }

    if (window.location.hash) {
        const hash = window.location.hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                    history.replaceState(null, null, ' ');
                }, 100);
            }, 100);
        }
    }
});
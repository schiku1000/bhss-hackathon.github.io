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
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
        
setInterval(nextSlide, 3000);

// Smooth Scrolling For Navbar
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
                
    const targetId = this.getAttribute('href');
    if(targetId === 'schedule.html') {
        window.location.href = targetId;
        return;
    }
                
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
        window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
         });
        }
    });
});

// Contact form submission with Web3Forms
document.getElementById('contactForm').addEventListener('submit', async function(e) {
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
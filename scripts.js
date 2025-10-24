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

// Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
            
            // Reset the form
            this.reset();
        });

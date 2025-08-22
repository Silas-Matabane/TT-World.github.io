// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create stars for night sky effect
    function createStars() {
        const heroSection = document.querySelector('.hero-section');
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        
        // Create different amounts of stars for different screen sizes
        const isMobile = window.innerWidth < 768;
        const starCount = isMobile ? 50 : 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random size
            const sizes = ['small', 'medium', 'large'];
            const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
            star.classList.add(randomSize);
            
            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
        
        heroSection.appendChild(starsContainer);
    }
    
    // Create stars when page loads
    createStars();
    
    // Recreate stars on window resize for responsive design
    window.addEventListener('resize', function() {
        const existingStars = document.querySelector('.stars');
        if (existingStars) {
            existingStars.remove();
        }
        createStars();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,  behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Add typing effect to job title
    const jobTitle = document.querySelector('.hero-section .text-primary');
    if (jobTitle) {
        const originalText = jobTitle.textContent;
        jobTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                jobTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after initial animations
        setTimeout(typeWriter, 1500);
    }
});
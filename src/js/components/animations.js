/**
 * Animations Component
 * Handles scroll-based animations and visual effects
 */

(function() {
    'use strict';
    
    /**
     * Intersection Observer for scroll animations
     */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);
        
        // Observe elements
        const elementsToAnimate = document.querySelectorAll('.visible-on-scroll');
        elementsToAnimate.forEach(el => observer.observe(el));
    }
    
    /**
     * Parallax effect for hero section
     */
    function initParallaxEffect() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            if (hero.querySelector('.hero-background')) {
                hero.querySelector('.hero-background').style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    /**
     * Typewriter effect for slogan
     */
    function initTypewriterEffect() {
        const slogan = document.querySelector('.slogan');
        if (!slogan || !slogan.classList.contains('typewriter')) return;
        
        const text = slogan.textContent;
        slogan.textContent = '';
        slogan.style.display = 'inline-block';
        
        let i = 0;
        const typeSpeed = 50;
        
        function type() {
            if (i < text.length) {
                slogan.textContent += text.charAt(i);
                i++;
                setTimeout(type, typeSpeed);
            }
        }
        
        // Start typing after a delay
        setTimeout(type, 1000);
    }
    
    /**
     * Service cards stagger animation
     */
    function initServiceCardsAnimation() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
        
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
            observer.observe(card);
        });
    }
    
    /**
     * Counter animation for statistics
     */
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    /**
     * Add hover tilt effect to cards
     */
    function initCardTiltEffect() {
        const cards = document.querySelectorAll('.service-card, .cta-box');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
    
    /**
     * Initialize all animations
     */
    function init() {
        initScrollAnimations();
        initServiceCardsAnimation();
        
        // Optional effects (can be enabled/disabled)
        // initParallaxEffect();
        // initTypewriterEffect();
        // initCardTiltEffect();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

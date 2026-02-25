/**
 * Main JavaScript
 * Global initialization and utilities
 */

(function() {
    'use strict';
    
    /**
     * Page loading animation
     */
    function initPageLoad() {
        document.body.classList.add('page-loaded');
    }
    
    /**
     * Smooth scroll for all anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const navbar = document.getElementById('navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Add click ripple effect to buttons
     */
    function initRippleEffect() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }
    
    /**
     * Lazy load images
     */
    function initLazyLoad() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    /**
     * Back to top button
     */
    function initBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '↑';
        backToTop.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTop);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    /**
     * Console message
     */
    function initConsoleMessage() {
        console.log('%cDevAll Digitalise Solutions', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #c41e3a 0%, #0066cc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
        console.log('%cYour vision is the start of market leadership...', 'font-size: 14px; color: #666;');
        console.log('%cWebsite developed with ❤️ by DevAll Team', 'font-size: 12px; color: #999;');
    }
    
    /**
     * Performance monitoring (optional)
     */
    function logPerformance() {
        if (window.performance) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    console.log(`Page load time: ${pageLoadTime}ms`);
                }, 0);
            });
        }
    }
    
    /**
     * Initialize all features
     */
    function init() {
        initPageLoad();
        initSmoothScroll();
        initLazyLoad();
        // initBackToTop(); // Optional
        // initRippleEffect(); // Optional
        initConsoleMessage();
        // logPerformance(); // Optional for debugging
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Global error handler
    window.addEventListener('error', (e) => {
        console.error('Global error:', e.error);
    });
    
})();

// Back to top button styles (add to CSS if enabling the feature)
const backToTopStyles = `
.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    color: var(--white);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
    z-index: 999;
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    transform: translateY(-5px);
}
`;

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Initialize all animations when DOM is loaded
function initAnimations() {
    // Hero Section Animations - Subtle and professional
    gsap.to('#hero-label', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.to('#hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.to('#hero-stat1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.to('#hero-stat2', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Reality Section Animations
    gsap.to('#reality-title', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        scrollTrigger: {
            trigger: '#threats-reality',
            start: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.to('.threat-reveal', {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
            trigger: '#threats-reality',
            start: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.to('#reality-stat1', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#reality-stat1',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.to('#reality-stat2', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
            trigger: '#reality-stat2',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Know the Threats - Subtle sliding
    gsap.utils.toArray('.threat-slide').forEach((card, index) => {
        gsap.from(card, {
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Tips Section - Smooth fade-in
    gsap.utils.toArray('.tip-item').forEach((tip, index) => {
        gsap.to(tip, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#tips-pledge',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Case Studies - Professional stagger
    gsap.utils.toArray('.case-study').forEach((study) => {
        gsap.from(study, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: study,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Subtle parallax for cards (less aggressive)
    gsap.utils.toArray('.threat-card').forEach((card) => {
        gsap.to(card, {
            y: -15,
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });
}

// Shield animation for Tips section - More professional
function createShieldAnimation() {
    const container = document.getElementById('shield-canvas');
    if (!container) return;
    
    // Create SVG shield
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.opacity = '0.06';
    
    const shield = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    shield.setAttribute('d', 'M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z');
    shield.setAttribute('fill', '#22b07d');
    shield.setAttribute('transform', 'scale(20) translate(10, 10)');
    
    svg.appendChild(shield);
    container.appendChild(svg);
    
    // Subtle animation
    gsap.from(shield, {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#tips-pledge',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAnimations();
        createShieldAnimation();
    });
} else {
    initAnimations();
    createShieldAnimation();
}

const heroSection = document.querySelector('.hero-section');
const whyPartnerSection = document.querySelector('#why-partner');
const ourMethodSection = document.querySelector('#our-meth');

// navbar
gsap.from(".navbar-logo img", {
    duration: 2,
    opacity: 1,
    y: -20,
    ease: "power2.out"
  });
  
  gsap.from(".navbar-links li", {
    duration: 2,
    opacity: 0,
    y: 20,
    ease: "power2.out",
    stagger: 0.2
  });


// hero section
function animateHeroSection() {
    gsap.from(".hero-img", {
        opacity: 1,
        scale: 0,
        duration: 1.4,
        ease: "power2.out",
    });

    gsap.from(".hero-content h2", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out",
    });

    gsap.from(".hero-content p", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.7,
        ease: "power2.out",
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateHeroSection(); // Trigger animations when the section is in view
        }
    });
}, {
    threshold: 0.1
});

observer.observe(heroSection);


// cards sections
  gsap.from(".section-title h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#our-exp",
      start: "top 80%",
      toggleActions: "restart none restart none",
    }
  });
  
  gsap.from(".card", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".card-container",
      start: "top 80%",
      toggleActions: "restart none restart none",
    }
  });

// why parter? section
function animateWhyPartnerSection() {
    gsap.from("#why-partner .spotlight h2", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
    });

    gsap.from("#why-partner .spotlight p", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out",
    });

    gsap.from("#why-partner .image-section .card-image", {
        opacity: 0,
        scale: 0.8,
        duration: 1.4,
        delay: 0.7,
        ease: "power2.out",
    });
}

const whyPartnerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateWhyPartnerSection(); // Trigger animations when the section is in view
        }
    });
}, {
    threshold: 0.1
});

whyPartnerObserver.observe(whyPartnerSection);


// Our Methodology section
function animateOurMethodSection() {
    gsap.from("#our-meth .meth-content .meth-image", {
        opacity: 0,
        scale: 0.1,
        duration: 1.4,
        ease: "power2.out",
    });

    gsap.from("#our-meth .meth-content .text-section h2", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out",
    });

    gsap.from("#our-meth .meth-content .text-section p", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.7,
        ease: "power2.out",
    });
}

const ourMethodObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateOurMethodSection();
        }
    });
}, {
    threshold: 0.1
});

ourMethodObserver.observe(ourMethodSection);

// Let's Connect section
window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const shakeAnimation = gsap.fromTo(
      ".connect-section",
      { x: -15 },
      {
        x: 15,
        duration: 0.3,
        repeat: 5,
        yoyo: true,
        paused: true,
      }
    );
  
    // (ScrollTrigger) to play the shake animation when in view
    ScrollTrigger.create({
      trigger: ".connect-section",
      start: "top 80%",
      onEnter: () => shakeAnimation.restart(),
      onEnterBack: () => shakeAnimation.restart(),
    });
  });
  
  
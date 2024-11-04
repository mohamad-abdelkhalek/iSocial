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
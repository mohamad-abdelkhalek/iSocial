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


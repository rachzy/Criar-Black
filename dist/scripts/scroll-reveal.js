setTimeout(() => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    if (section.id === "home") return;
    ScrollReveal().reveal(`#${section.id}`, {
      duration: 500,
      origin: "bottom",
      distance: "200px",
      easing: "ease-in-out",
      opacity: 0.3,
    });
  });
}, 1500);

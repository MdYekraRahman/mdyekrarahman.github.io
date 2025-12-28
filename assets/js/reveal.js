document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");

  const show = (el) => el.classList.add("is-visible");

  // If IntersectionObserver supported, reveal on scroll
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
  } else {
    // Fallback: reveal all
    els.forEach(show);
  }
});

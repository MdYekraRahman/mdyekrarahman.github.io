---
title: "Publications / Projects"
permalink: /pubs-projects/
layout: single
author_profile: true
---

## <i class="fas fa-file-alt"></i> Publications
<hr class="section-rule"/>

### Journal Papers
<p class="muted">Coming soon.</p>

### Conference Papers
<div class="pub-item">
  <div class="pub-title">
    <strong>M. Y. Rahman</strong> and S. M. Mominuzzaman, “Exploring Lead Free Mixed Halide Double Perovskites Solar Cell,”
    <em>13th International Conference on Electrical and Computer Engineering (ICECE 2024)</em>, Dhaka, Bangladesh, pp. 165–170.
  </div>
  <div class="pub-links">
    <a class="btn btn--primary btn--small" href="https://doi.org/10.1109/ICECE64886.2024.11024609" target="_blank" rel="noopener">
      DOI
    </a>
  </div>
</div>

---

## <i class="fas fa-project-diagram"></i> Projects
<hr class="section-rule"/>

<!-- ============ PROJECT CARD (Example 1) ============ -->
<div class="proj-card">

  <!-- Left: Text -->
  <div class="proj-text">
    <h3 class="proj-title">High-Frequency Integrated Synchronous Buck (TSMC 180nm HV BCD)</h3>

    <p class="proj-sub">
      Schematic-to-simulation workflow in Cadence Virtuoso/Spectre with gate-driver chain (level shifters, bootstrap, dead-time).
    </p>

    <ul class="proj-bullets">
      <li>Designed integrated half-bridge buck and performed MOS width optimization for efficiency</li>
      <li>Implemented gate driver blocks: level shifters, dead-time generator, bootstrap</li>
      <li>Validated switching behavior, ripple, and inductor current in ADE/Spectre</li>
      <li>Focus: reproducible workflow + EMI-aware design considerations</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Cadence</span>
      <span class="tag">Spectre</span>
      <span class="tag">HV BCD</span>
      <span class="tag">Gate Driver</span>
      <span class="tag">2 MHz+</span>
    </div>
  </div>

  <!-- Right: Carousel -->
  <div class="proj-media">
    <div class="carousel" data-carousel>

      <!-- Images: replace with your own -->
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/buck/1.jpg" alt="Buck project image 1">
        <img class="carousel-slide" src="/assets/images/projects/buck/2.jpg" alt="Buck project image 2">
        <img class="carousel-slide" src="/assets/images/projects/buck/3.jpg" alt="Buck project image 3">
        <img class="carousel-slide" src="/assets/images/projects/buck/4.jpg" alt="Buck project image 4">
      </div>

      <!-- Controls -->
      <button class="carousel-btn prev" type="button" aria-label="Previous image" data-prev>‹</button>
      <button class="carousel-btn next" type="button" aria-label="Next image" data-next>›</button>

      <!-- Dots -->
      <div class="carousel-dots" data-dots></div>

    </div>
  </div>

</div>

<!-- ============ PROJECT CARD (Example 2 placeholder) ============ -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">TCAD → SPICE Modeling → Circuit Verification (New Device Enablement)</h3>
    <p class="proj-sub">
      Device-level simulation to compact model generation, then verification inside Cadence with auxiliary circuits.
    </p>

    <ul class="proj-bullets">
      <li>TCAD simulation (power MOSFETs) and model extraction for circuit use</li>
      <li>Generated compact SPICE models and integrated them into Spectre simulations</li>
      <li>Designed auxiliary circuits required to evaluate new device behavior in real systems</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">TCAD</span>
      <span class="tag">SPICE Models</span>
      <span class="tag">Cadence</span>
      <span class="tag">Device Enablement</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/tcad/1.jpg" alt="TCAD image 1">
        <img class="carousel-slide" src="/assets/images/projects/tcad/2.jpg" alt="TCAD image 2">
        <img class="carousel-slide" src="/assets/images/projects/tcad/3.jpg" alt="TCAD image 3">
      </div>
      <button class="carousel-btn prev" type="button" aria-label="Previous image" data-prev>‹</button>
      <button class="carousel-btn next" type="button" aria-label="Next image" data-next>›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>

<!-- JS for carousels -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector("[data-track]");
    const slides = Array.from(track.querySelectorAll(".carousel-slide"));
    const prevBtn = carousel.querySelector("[data-prev]");
    const nextBtn = carousel.querySelector("[data-next]");
    const dotsWrap = carousel.querySelector("[data-dots]");
    let idx = slides.findIndex(s => s.classList.contains("is-active"));
    if (idx < 0) idx = 0;

    // Build dots
    dotsWrap.innerHTML = "";
    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "dot" + (i === idx ? " is-active" : "");
      b.setAttribute("aria-label", `Go to image ${i+1}`);
      b.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(b);
      return b;
    });

    function goTo(newIdx) {
      slides[idx].classList.remove("is-active");
      dots[idx].classList.remove("is-active");
      idx = (newIdx + slides.length) % slides.length;
      slides[idx].classList.add("is-active");
      dots[idx].classList.add("is-active");
    }

    prevBtn.addEventListener("click", () => goTo(idx - 1));
    nextBtn.addEventListener("click", () => goTo(idx + 1));
  });
});
</script>

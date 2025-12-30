---
title: "Publications / Projects"
permalink: /pubs-projects/
layout: default
author_profile: false
classes: wide
---

<div class="wrap" markdown="1">

<style>
  /* ===== Page-only 2-column layout ===== */
  .page-grid{
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 28px;
    align-items: start;
  }
  @media (max-width: 900px){
    .page-grid{ grid-template-columns: 1fr; }
  }

  /* ===== Author card ===== */
  .author-card{
    position: sticky;
    top: 90px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 16px;
    background: #fff;
  }
  @media (max-width: 900px){
    .author-card{ position: static; }
  }

  .author-avatar{
    width: 110px;
    height: 110px;
    border-radius: 999px;
    object-fit: cover;
    display: block;
    margin: 0 auto 10px auto;
  }
  .author-name{ text-align: center; font-weight: 800; margin: 0; }
  .author-bio{ text-align: center; color: #6b7280; margin: 6px 0 12px 0; font-size: 0.95rem; }
  .author-links{ list-style: none; padding: 0; margin: 0; }
  .author-links li{ margin: 8px 0; }
  .author-links a{ text-decoration: none; display: inline-flex; gap: 8px; align-items: center; }
</style>

<div class="page-grid">

  <!-- LEFT: manual author profile -->
  <aside class="author-card">
    <img class="author-avatar" src="/assets/images/profile.JPG" alt="Md Yekra Rahman">
    <p class="author-name">Md Yekra Rahman</p>
    <p class="author-bio">PhD Student, Mizzou</p>

    <ul class="author-links">
      <li>
        <a href="mailto:mrvpx@missouri.edu">
          <i class="fas fa-fw fa-envelope"></i><span>Email</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/MdYekraRahman" target="_blank" rel="noopener">
          <i class="fab fa-fw fa-github"></i><span>GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/mdyekrarahman/" target="_blank" rel="noopener">
          <i class="fab fa-fw fa-linkedin"></i><span>LinkedIn</span>
        </a>
      </li>
    </ul>
  </aside>

  <!-- RIGHT: page content -->
  <main markdown="1">



## <i class="fas fa-project-diagram"></i> Projects
<hr class="section-rule"/>

<!-- =========================================================
     PROJECT 1 — ANALOG IC (OP-AMP)
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      Two-Stage Miller-Compensated CMOS Op-Amp (IBM 130 nm)
    </h3>

    <p class="proj-sub">
      gm/ID-based sizing, small-signal analysis, and full
      performance verification using dedicated Cadence testbenches.
    </p>

    <ul class="proj-bullets">
      <li>Designed a two-stage CMOS operational amplifier under single-supply constraints</li>
      <li>Used gm/ID methodology to size devices for gain, GBW, and phase-margin targets</li>
      <li>Built testbenches for open-loop gain, GBW/PM, slew rate, output swing, CMRR, and power</li>
      <li>Verified saturation operation across bias corners and load conditions</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Analog IC</span>
      <span class="tag">gm/ID</span>
      <span class="tag">IBM 130nm</span>
      <span class="tag">Cadence</span>
      <span class="tag">Testbenches</span>
    </div>
  </div>

<div class="proj-media">
  <div class="carousel" data-carousel>
    <div class="carousel-track" data-track>
      <img class="carousel-slide" src="/assets/images/projects/opamp/Topology.png" alt="Op-amp topology">
      <img class="carousel-slide" src="/assets/images/projects/opamp/Small_Signal.png" alt="Op-amp small signal model">
      <img class="carousel-slide" src="/assets/images/projects/opamp/M8-Sizing.png" alt="M8 sizing">
      <img class="carousel-slide" src="/assets/images/projects/opamp/Sizing-of-M1-4-and-M8.png" alt="M1–M4 and M8 sizing">
      <img class="carousel-slide" src="/assets/images/projects/opamp/M12_M34_Sizing.png" alt="M12 and M3/M4 sizing">
      <img class="carousel-slide" src="/assets/images/projects/opamp/Main_1.png" alt="Final op-amp circuit">
    </div>
    <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
    <button class="carousel-btn next" data-next aria-label="Next">›</button>
    <div class="carousel-dots" data-dots></div>
  </div>
</div>


</div>

<!-- =========================================================
     PROJECT 2 — INTEGRATED BUCK CONVERTER
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      Synchronous Half-Bridge Buck Converter (TSMC 180 nm HV BCD)
    </h3>

    <p class="proj-sub">
      High-frequency integrated DC-DC converter with on-chip
      gate-driver chain, validated in Spectre.
    </p>

    <ul class="proj-bullets">
      <li>Designed a 12 V → 3.3 V, 1 A synchronous buck converter operating at multi-MHz</li>
      <li>Optimized MOSFET widths via parametric sweeps to balance efficiency and loss</li>
      <li>Implemented gate-driver blocks: level shifters, bootstrap circuit, and dead-time control</li>
      <li>Validated switching behavior, ripple, and inductor current in ADE/Spectre</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Cadence</span>
      <span class="tag">Spectre</span>
      <span class="tag">TSMC 180nm</span>
      <span class="tag">HV BCD</span>
      <span class="tag">2 MHz+</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/buck/1.jpg" alt="Buck schematic">
        <img class="carousel-slide" src="/assets/images/projects/buck/2.jpg" alt="Gate driver waveforms">
        <img class="carousel-slide" src="/assets/images/projects/buck/3.jpg" alt="Switching node waveform">
        <img class="carousel-slide" src="/assets/images/projects/buck/4.jpg" alt="Efficiency sweep">
      </div>
      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>

<!-- =========================================================
     PROJECT 3 — TCAD → SPICE → CIRCUIT
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      TCAD → SPICE Modeling → Circuit-Level Verification
    </h3>

    <p class="proj-sub">
      End-to-end device enablement workflow from physics-based
      simulation to real circuit validation.
    </p>

    <ul class="proj-bullets">
      <li>Performed TCAD simulations of power MOSFET structures</li>
      <li>Extracted compact SPICE models suitable for circuit-level use</li>
      <li>Integrated custom models into Spectre and verified behavior in real converter blocks</li>
      <li>Evaluated switching dynamics, losses, and bias sensitivity</li>
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
        <img class="carousel-slide is-active" src="/assets/images/projects/tcad/1.jpg" alt="TCAD structure">
        <img class="carousel-slide" src="/assets/images/projects/tcad/2.jpg" alt="IV characteristics">
        <img class="carousel-slide" src="/assets/images/projects/tcad/3.jpg" alt="Circuit simulation">
      </div>
      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>

<!-- =========================================================
     PROJECT 4 — PCB DESIGN
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      Four-Layer Power Converter PCB (Altium Designer)
    </h3>

    <p class="proj-sub">
      Complete schematic-to-layout workflow with EMI-aware
      stackup and power-integrity considerations.
    </p>

    <ul class="proj-bullets">
      <li>Designed a four-layer PCB including schematic capture and layout</li>
      <li>Created custom symbols and footprints for a reusable PCB library</li>
      <li>Used solid inner GND and power planes for low-impedance return paths</li>
      <li>Generated manufacturing-ready Gerber and drill files</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Altium</span>
      <span class="tag">4-Layer PCB</span>
      <span class="tag">EMI</span>
      <span class="tag">Power Integrity</span>
      <span class="tag">Gerbers</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/pcb/1.jpg" alt="PCB layout">
        <img class="carousel-slide" src="/assets/images/projects/pcb/2.jpg" alt="Inner layer ground plane">
        <img class="carousel-slide" src="/assets/images/projects/pcb/3.jpg" alt="Power plane">
        <img class="carousel-slide" src="/assets/images/projects/pcb/4.jpg" alt="3D PCB view">
      </div>
      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>

## <i class="fas fa-file-alt"></i> Publications
<hr class="section-rule"/>

### Journal Papers
<p class="muted">Loading.</p>

### Conference Papers

<div class="pub-item">
  <div class="pub-title">
    <strong>M. Y. Rahman</strong> and S. M. Mominuzzaman,
    “Exploring Lead-Free Mixed Halide Double Perovskites Solar Cell,”
    <em>13th International Conference on Electrical and Computer Engineering (ICECE 2024)</em>,
    Dhaka, Bangladesh, pp. 165–170.     <a class="btn btn--primary btn--small"
       href="https://doi.org/10.1109/ICECE64886.2024.11024609"
       target="_blank" rel="noopener">
      DOI
    </a>
  </div>
</div>

---

  </main>

</div>
</div>


<script>
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('[data-track]');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('[data-next]');
    const prevButton = carousel.querySelector('[data-prev]');
    const dotsNav = carousel.querySelector('[data-dots]');

    // 1. Generate Dots automatically based on number of slides
    slides.forEach((slide, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (slide.classList.contains('is-active')) {
        dot.classList.add('is-active');
      }
      dotsNav.appendChild(dot);
      
      // Add click listener to dot
      dot.addEventListener('click', () => {
        const currentSlide = track.querySelector('.carousel-slide.is-active');
        const currentDot = dotsNav.querySelector('.carousel-dot.is-active');
        updateCarousel(currentSlide, slide, currentDot, dot);
      });
    });

    const dots = Array.from(dotsNav.children);

    // 2. Function to update classes
    const updateCarousel = (currentSlide, targetSlide, currentDot, targetDot) => {
      currentSlide.classList.remove('is-active');
      targetSlide.classList.add('is-active');
      
      if(currentDot && targetDot) {
        currentDot.classList.remove('is-active');
        targetDot.classList.add('is-active');
      }
    };

    // 3. Next Button Logic
    nextButton.addEventListener('click', () => {
      const currentSlide = track.querySelector('.carousel-slide.is-active');
      const currentDot = dotsNav.querySelector('.carousel-dot.is-active');
      let nextSlide = currentSlide.nextElementSibling;
      let nextDot = currentDot ? currentDot.nextElementSibling : null;

      // Loop back to start if at the end
      if (!nextSlide) {
        nextSlide = slides[0];
        nextDot = dots[0];
      }

      updateCarousel(currentSlide, nextSlide, currentDot, nextDot);
    });

    // 4. Previous Button Logic
    prevButton.addEventListener('click', () => {
      const currentSlide = track.querySelector('.carousel-slide.is-active');
      const currentDot = dotsNav.querySelector('.carousel-dot.is-active');
      let prevSlide = currentSlide.previousElementSibling;
      let prevDot = currentDot ? currentDot.previousElementSibling : null;

      // Loop to end if at the start
      if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
        prevDot = dots[dots.length - 1];
      }

      updateCarousel(currentSlide, prevSlide, currentDot, prevDot);
    });
  });
});
</script>

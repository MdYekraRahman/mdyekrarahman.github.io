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

  /* =========================================================
     PROJECT CARD: force equal height columns so media follows text
     ========================================================= */
  .proj-card{
    display: grid;
    grid-template-columns: 1fr minmax(320px, 520px);
    gap: 22px;
    align-items: stretch; /* KEY: both columns same height */
  }
  @media (max-width: 900px){
    .proj-card{ grid-template-columns: 1fr; }
  }

  /* =========================================================
     CAROUSEL (page-local, no dependency on global CSS)
     Goal: height follows text column height + non-distorted images
     ========================================================= */
  .proj-media{
    width: 100%;
    height: 100%;
    display: flex;        /* allow child to stretch */
  }

  .carousel{
    position: relative;
    width: 100%;
    height: 100%;         /* KEY: fill media column */
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    background: #fff;
    display: flex;        /* allow track to stretch */
    flex-direction: column;
  }

  /* Flexible “photo box” that grows with the card height */
  .carousel-track{
    position: relative;
    width: 100%;
    flex: 1;              /* KEY: take remaining height */
    min-height: 260px;    /* don’t collapse if text is short */
    max-height: none;     /* remove hard cap */
  }

  .carousel-slide{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;  /* IMPORTANT: no distortion */
    object-position: center;
    display: none;
    background: #fff;
  }
  .carousel-slide.is-active{ display: block; }

  /* Visible buttons (not dots) */
  .carousel-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 50; /* stronger */
    width: 48px;
    height: 48px;
    border-radius: 999px;
    border: 1px solid rgba(0,0,0,0.15);
    background: rgba(255,255,255,0.98);
    color: #111827;
    font-size: 34px;
    font-weight: 900;
    line-height: 1;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 10px 24px rgba(0,0,0,0.18);
    opacity: 1;
  }
  .carousel-btn.prev{ left: 12px; }
  .carousel-btn.next{ right: 12px; }
  .carousel-btn:hover{
    transform: translateY(-50%) scale(1.05);
    background: #ffffff;
  }

  .carousel-dots{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    z-index: 40;
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 0 10px;
  }
  .carousel-dot{
    width: 10px;
    height: 10px;
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: rgba(255,255,255,0.8);
    cursor: pointer;
  }
  .carousel-dot.is-active{
    background: rgba(17,24,39,0.85);
    border-color: rgba(17,24,39,0.85);
  }
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
      Single-supply two-stage operational amplifier designed to meet
      stringent gain, bandwidth, stability, and power constraints
      using analytical small-signal modeling and transistor-level design.
    </p>

    <ul class="proj-bullets">
      <li>Designed a classical two-stage Miller-compensated CMOS operational amplifier using 0.13 µm CMOS technology</li>
      <li>Performed detailed small-signal analysis to determine transconductance, output resistance, gain, and frequency response</li>
      <li>Achieved ≥ 70 dB differential gain, ≥ 5 MHz unity-gain bandwidth, and ≥ 60° phase margin under a 2 pF load</li>
      <li>Sized devices to satisfy ≥ 4 V/µs average slew rate and ≥ 1.2 V output swing using a single 1.5 V supply</li>
      <li>Met strict power and topology constraints including ≤ 0.1 mW total power dissipation and only one ideal current source</li>
      <li>Verified open-loop gain, phase margin, slew rate, output swing, and CMRR using Cadence ADE simulations</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Analog IC</span>
      <span class="tag">CMOS Op-Amp</span>
      <span class="tag">IBM 130nm</span>
      <span class="tag">Miller Compensation</span>
      <span class="tag">Small-Signal Analysis</span>
      <span class="tag">Cadence</span>
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
    Dhaka, Bangladesh, pp. 165–170.
    <a class="btn btn--primary btn--small"
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
    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    const nextButton = carousel.querySelector('[data-next]');
    const prevButton = carousel.querySelector('[data-prev]');
    const dotsNav = carousel.querySelector('[data-dots]');

    if (!track || slides.length === 0) return;

    // Ensure exactly one active slide (fixes OPAMP carousel)
    let activeIndex = slides.findIndex(s => s.classList.contains('is-active'));
    if (activeIndex < 0) {
      slides[0].classList.add('is-active');
      activeIndex = 0;
    } else {
      slides.forEach((s, i) => { if (i !== activeIndex) s.classList.remove('is-active'); });
    }

    // Build dots fresh (avoid duplicates on re-render)
    if (dotsNav) dotsNav.innerHTML = '';
    const dots = slides.map((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot' + (i === activeIndex ? ' is-active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsNav && dotsNav.appendChild(dot);
      return dot;
    });

    function setActive(i){
      slides[activeIndex].classList.remove('is-active');
      dots[activeIndex] && dots[activeIndex].classList.remove('is-active');

      activeIndex = i;

      slides[activeIndex].classList.add('is-active');
      dots[activeIndex] && dots[activeIndex].classList.add('is-active');
    }

    function goTo(i){
      const n = slides.length;
      const wrapped = ((i % n) + n) % n;
      setActive(wrapped);
    }

    nextButton && nextButton.addEventListener('click', () => goTo(activeIndex + 1));
    prevButton && prevButton.addEventListener('click', () => goTo(activeIndex - 1));
  });
});
</script>

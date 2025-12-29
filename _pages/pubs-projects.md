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
    <strong>M. Y. Rahman</strong> and S. M. Mominuzzaman,
    “Exploring Lead-Free Mixed Halide Double Perovskites Solar Cell,”
    <em>13th International Conference on Electrical and Computer Engineering (ICECE 2024)</em>,
    Dhaka, Bangladesh, pp. 165–170.
  </div>

  <div class="pub-links">
    <a class="btn btn--primary btn--small"
       href="https://doi.org/10.1109/ICECE64886.2024.11024609"
       target="_blank" rel="noopener">
      DOI
    </a>
  </div>
</div>

---

## <i class="fas fa-project-diagram"></i> Projects
<hr class="section-rule"/>

<!-- =========================================================
     PROJECT 1 — ANALOG IC (OP-AMP)
========================================================= -->
<div class="proj-card">

  <!-- TEXT -->
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

  <!-- MEDIA -->
  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active"
             src="/assets/images/projects/opamp/1.jpg"
             alt="Op-amp schematic">
        <img class="carousel-slide"
             src="/assets/images/projects/opamp/2.jpg"
             alt="Op-amp AC response">
        <img class="carousel-slide"
             src="/assets/images/projects/opamp/3.jpg"
             alt="Op-amp transient response">
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
        <img class="carousel-slide is-active"
             src="/assets/images/projects/buck/1.jpg"
             alt="Buck schematic">
        <img class="carousel-slide"
             src="/assets/images/projects/buck/2.jpg"
             alt="Gate driver waveforms">
        <img class="carousel-slide"
             src="/assets/images/projects/buck/3.jpg"
             alt="Switching node waveform">
        <img class="carousel-slide"
             src="/assets/images/projects/buck/4.jpg"
             alt="Efficiency sweep">
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
        <img class="carousel-slide is-active"
             src="/assets/images/projects/tcad/1.jpg"
             alt="TCAD structure">
        <img class="carousel-slide"
             src="/assets/images/projects/tcad/2.jpg"
             alt="IV characteristics">
        <img class="carousel-slide"
             src="/assets/images/projects/tcad/3.jpg"
             alt="Circuit simulation">
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
        <img class="carousel-slide is-active"
             src="/assets/images/projects/pcb/1.jpg"
             alt="PCB layout">
        <img class="carousel-slide"
             src="/assets/images/projects/pcb/2.jpg"
             alt="Inner layer ground plane">
        <img class="carousel-slide"
             src="/assets/images/projects/pcb/3.jpg"
             alt="Power plane">
        <img class="carousel-slide"
             src="/assets/images/projects/pcb/4.jpg"
             alt="3D PCB view">
      </div>

      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>

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
     PROJECT CARD: desktop = 2 columns, mobile = stacked
     Fix mobile text squeezing/cutting by stacking cleanly
     ========================================================= */
  .proj-card{
    display: grid;
    grid-template-columns: 1fr minmax(320px, 520px);
    gap: 22px;
    align-items: stretch;
  }
  /* IMPORTANT: on mobile, stack and avoid any forced heights */
  @media (max-width: 900px){
    .proj-card{ grid-template-columns: 1fr; gap: 14px; }
    .proj-text{ min-width: 0; } /* prevents overflow/cut */
  }

  /* =========================================================
     CAROUSEL (page-local)
     - Desktop: media height follows text (nice aligned cards)
     - Mobile: stable aspect ratio box so buttons fit & images look good
     ========================================================= */
  .proj-media{
    width: 100%;
    height: 100%;
    display: flex;
    min-width: 0; /* avoid overflow in grid */
  }

  .carousel{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    background: #fff;
    display: flex;
    flex-direction: column;
    touch-action: pan-y; /* allow vertical scroll; we’ll handle horizontal swipes */
  }

  /* Desktop: fill column height (follows text) */
  .carousel-track{
    position: relative;
    width: 100%;
    flex: 1;
    min-height: 260px;
    max-height: none;
    overflow: hidden;
  }

  /* Mobile: use an aspect ratio box (prevents weird tall cards & fits buttons) */
  @media (max-width: 900px){
    .carousel{ height: auto; }
    .carousel-track{
      flex: none;
      aspect-ratio: 16 / 10;
      min-height: 220px;
      max-height: 420px;
    }
  }

  .carousel-slide{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: none;
    background: #fff;
    cursor: zoom-in;
    user-select: none;
    -webkit-user-drag: none;
  }
  .carousel-slide.is-active{ display: block; }

  /* Buttons: make visible and mobile-safe */
  .carousel-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 60;
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
  .carousel-btn.prev{ left: 10px; }
  .carousel-btn.next{ right: 10px; }

  @media (max-width: 900px){
    .carousel-btn{
      width: 42px;
      height: 42px;
      font-size: 30px;
    }
    .carousel-btn.prev{ left: 8px; }
    .carousel-btn.next{ right: 8px; }
  }

  .carousel-btn:hover{
    transform: translateY(-50%) scale(1.05);
    background: #ffffff;
  }

  .carousel-dots{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    z-index: 55;
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 0 10px;
    pointer-events: auto;
  }
  .carousel-dot{
    width: 10px;
    height: 10px;
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: rgba(255,255,255,0.85);
    cursor: pointer;
  }
  .carousel-dot.is-active{
    background: rgba(17,24,39,0.85);
    border-color: rgba(17,24,39,0.85);
  }

  /* =========================================================
     LIGHTBOX
     - Desktop: show arrows
     - Mobile: show swipe hint; arrows optional but kept
     ========================================================= */
  .lightbox{
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: none;
  }
  .lightbox.is-open{ display: block; }

  .lightbox__backdrop{
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.78);
  }

  .lightbox__panel{
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 22px;
  }

  .lightbox__img{
    max-width: min(1200px, 96vw);
    max-height: 88vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 14px;
    background: #0b1220;
    box-shadow: 0 18px 60px rgba(0,0,0,0.45);
    cursor: zoom-out;
    user-select: none;
    -webkit-user-drag: none;
    touch-action: none; /* we capture swipes on it */
  }

  .lightbox__close{
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 2;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.22);
    background: rgba(17,24,39,0.85);
    color: #fff;
    font-size: 22px;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  .lightbox__nav{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 54px;
    height: 54px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.22);
    background: rgba(17,24,39,0.72);
    color: #fff;
    font-size: 38px;
    font-weight: 900;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .lightbox__nav.prev{ left: 14px; }
  .lightbox__nav.next{ right: 14px; }

  /* On small screens, make nav buttons smaller so they always fit */
  @media (max-width: 900px){
    .lightbox__panel{ padding: 14px; }
    .lightbox__nav{
      width: 46px;
      height: 46px;
      font-size: 34px;
      background: rgba(17,24,39,0.62);
    }
    .lightbox__nav.prev{ left: 10px; }
    .lightbox__nav.next{ right: 10px; }
  }

  .lightbox__hint{
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.88);
    font-size: 0.95rem;
    background: rgba(17,24,39,0.65);
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.14);
    white-space: nowrap;
  }
  @media (max-width: 900px){
    .lightbox__hint{
      font-size: 0.9rem;
      padding: 7px 10px;
    }
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

<!-- Lightbox DOM (one for the whole page) -->
<div class="lightbox" data-lightbox>
  <div class="lightbox__backdrop" data-lightbox-close></div>
  <div class="lightbox__panel" role="dialog" aria-modal="true" aria-label="Image preview">
    <button class="lightbox__close" type="button" data-lightbox-close aria-label="Close">✕</button>
    <button class="lightbox__nav prev" type="button" data-lightbox-prev aria-label="Previous">‹</button>
    <img class="lightbox__img" data-lightbox-img alt="">
    <button class="lightbox__nav next" type="button" data-lightbox-next aria-label="Next">›</button>
    <div class="lightbox__hint">Esc closes · ← → navigate · Swipe left/right on mobile</div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // =========================================================
  // Carousel logic (FIXED)
  // - Ensures active slide exists
  // - Dots stay synced
  // - Buttons stay synced
  // - Mobile swipe left/right to change slides
  // =========================================================
  const carousels = document.querySelectorAll('[data-carousel]');

  function initCarousel(carousel){
    const track = carousel.querySelector('[data-track]');
    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    const nextButton = carousel.querySelector('[data-next]');
    const prevButton = carousel.querySelector('[data-prev]');
    const dotsNav = carousel.querySelector('[data-dots]');

    if (!track || slides.length === 0) return;

    // Ensure exactly one active slide
    let activeIndex = slides.findIndex(s => s.classList.contains('is-active'));
    if (activeIndex < 0) {
      slides[0].classList.add('is-active');
      activeIndex = 0;
    } else {
      slides.forEach((s, i) => { if (i !== activeIndex) s.classList.remove('is-active'); });
    }

    // Build dots fresh
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

    nextButton && nextButton.addEventListener('click', (e) => {
      e.preventDefault();
      goTo(activeIndex + 1);
    });
    prevButton && prevButton.addEventListener('click', (e) => {
      e.preventDefault();
      goTo(activeIndex - 1);
    });

    // Mobile swipe support on carousel (track)
    let startX = 0, startY = 0, isSwiping = false;

    track.addEventListener('touchstart', (e) => {
      if (!e.touches || e.touches.length !== 1) return;
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      isSwiping = true;
    }, {passive:true});

    track.addEventListener('touchmove', (e) => {
      if (!isSwiping || !e.touches || e.touches.length !== 1) return;
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      // If mostly horizontal, prevent page scroll
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8){
        e.preventDefault();
      }
    }, {passive:false});

    track.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      isSwiping = false;
      const changed = e.changedTouches && e.changedTouches[0];
      if (!changed) return;
      const dx = changed.clientX - startX;
      if (Math.abs(dx) < 35) return;

      if (dx < 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    });

    // expose helpers for lightbox sync
    carousel.__carouselApi = {
      getSlides: () => slides,
      getActiveIndex: () => activeIndex,
      goTo
    };
  }

  carousels.forEach(initCarousel);

  // =========================================================
  // Lightbox logic
  // - Click active slide to open
  // - Esc / backdrop closes
  // - Arrow buttons + keyboard arrows
  // - MOBILE swipe left/right on zoomed image
  // - Keeps carousel + lightbox in sync
  // =========================================================
  const lightbox = document.querySelector('[data-lightbox]');
  const lbImg = document.querySelector('[data-lightbox-img]');
  const lbCloseEls = document.querySelectorAll('[data-lightbox-close]');
  const lbPrevBtn = document.querySelector('[data-lightbox-prev]');
  const lbNextBtn = document.querySelector('[data-lightbox-next]');

  let currentCarousel = null;
  let currentIndex = 0;

  function openLightbox(imgEl){
    currentCarousel = imgEl.closest('[data-carousel]');
    const api = currentCarousel && currentCarousel.__carouselApi;
    if (!api) return;

    currentIndex = api.getActiveIndex();

    lbImg.src = imgEl.src;
    lbImg.alt = imgEl.alt || 'Image preview';

    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lightbox.classList.remove('is-open');
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
    currentCarousel = null;
    currentIndex = 0;
  }

  function goLightbox(delta){
    if (!currentCarousel) return;
    const api = currentCarousel.__carouselApi;
    const slides = api.getSlides();
    const n = slides.length;

    currentIndex = ((currentIndex + delta) % n + n) % n;

    // sync carousel
    api.goTo(currentIndex);

    // sync lightbox image
    lbImg.src = slides[currentIndex].src;
    lbImg.alt = slides[currentIndex].alt || 'Image preview';
  }

  // Open only when clicking ACTIVE slide
  document.querySelectorAll('[data-carousel] .carousel-slide').forEach(img => {
    img.addEventListener('click', () => {
      if (!img.classList.contains('is-active')) return;
      openLightbox(img);
    });
  });

  // Close controls
  lbCloseEls.forEach(el => el.addEventListener('click', closeLightbox));
  lbPrevBtn && lbPrevBtn.addEventListener('click', () => goLightbox(-1));
  lbNextBtn && lbNextBtn.addEventListener('click', () => goLightbox( 1));
  lbImg.addEventListener('click', closeLightbox);

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goLightbox(1);
    if (e.key === 'ArrowLeft')  goLightbox(-1);
  });

  // MOBILE swipe support on zoomed image
  let lbStartX = 0, lbStartY = 0, lbSwiping = false;

  lbImg.addEventListener('touchstart', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (!e.touches || e.touches.length !== 1) return;
    const t = e.touches[0];
    lbStartX = t.clientX;
    lbStartY = t.clientY;
    lbSwiping = true;
  }, {passive:true});

  lbImg.addEventListener('touchmove', (e) => {
    if (!lbSwiping || !e.touches || e.touches.length !== 1) return;
    const t = e.touches[0];
    const dx = t.clientX - lbStartX;
    const dy = t.clientY - lbStartY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8){
      e.preventDefault();
    }
  }, {passive:false});

  lbImg.addEventListener('touchend', (e) => {
    if (!lbSwiping) return;
    lbSwiping = false;
    const changed = e.changedTouches && e.changedTouches[0];
    if (!changed) return;
    const dx = changed.clientX - lbStartX;

    if (Math.abs(dx) < 35) return;

    if (dx < 0) goLightbox(1);
    else goLightbox(-1);
  });
});
</script>

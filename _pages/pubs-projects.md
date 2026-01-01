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

  /* =========================================================
   MODERN PROJECT BULLET STYLE (DROP-IN REPLACEMENT)
   ========================================================= */

.proj-bullets {
  list-style: none;
  padding: 0;
  margin: 14px 0 18px;
  display: grid;
  gap: 10px;
}

.proj-bullets li {
  position: relative;
  padding: 12px 14px 12px 44px;
  background: linear-gradient(180deg, #ffffff, #fafafa);
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #374151;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Accent marker */
.proj-bullets li::before {
  content: "▹";
  position: absolute;
  left: 16px;
  top: 12px;
  font-size: 1.1rem;
  color: #2563eb; /* subtle blue accent */
}

/* Hover interaction */
.proj-bullets li:hover {
  transform: translateX(4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);
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
      12 V → 3.3 V, 1 A, 2 MHz synchronous DC-DC buck converter with
      on-chip gate-driver chain (level shifters + dead-time + bootstrap),
      validated in Cadence Spectre.
    </p>

    <ul class="proj-bullets">
      <li>Designed a 12 V-to-3.3 V, 1 A, 2 MHz buck converter power stage with LC output filtering</li>
      <li>Analyzed key challenges: switching/conduction losses, component selection (inductor/capacitor), and ripple constraints</li>
      <li>Implemented full gate-driver system: up-level shifter, down-level shifter, dead-time control, and bootstrap circuit</li>
      <li>Set final driver-stage sizing to achieve ~5 ns rise (high-side), ~2 ns rise (low-side), and ~1 ns fall times; logic gating prevents shoot-through</li>
      <li>Optimized MOSFET widths via efficiency sweeps; best total widths: 65.6 mm (high-side) and 96.4 mm (low-side), with L = 900 nm</li>
      <li>Verified waveforms: PWM input, HS/LS VGS, level-shifter I/O, bootstrap voltage; measured ~5.15% Vout ripple and ~198 mA inductor ripple</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Cadence</span>
      <span class="tag">Spectre</span>
      <span class="tag">TSMC 180nm</span>
      <span class="tag">HV BCD</span>
      <span class="tag">2 MHz</span>
      <span class="tag">Gate Driver</span>
      <span class="tag">Bootstrap</span>
      <span class="tag">Level Shifters</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/buck/DC-DC-Buck.png" alt="DC-DC buck converter power stage">
        <img class="carousel-slide" src="/assets/images/projects/buck/Gate-Driver-Design.png" alt="Gate driver design and shoot-through prevention logic">
        <img class="carousel-slide" src="/assets/images/projects/buck/Up-Level-Shifter-Design.png" alt="Up-level shifter input and output verification">
        <img class="carousel-slide" src="/assets/images/projects/buck/Down-Level-Shifter-Design.png" alt="Down-level shifter input and output verification">
        <img class="carousel-slide" src="/assets/images/projects/buck/Simulation-Result-1.png" alt="Simulation results: PWM input, VGS, bootstrap voltage">
        <img class="carousel-slide" src="/assets/images/projects/buck/Simulation-Result-2.png" alt="Simulation results: output voltage ripple and inductor current ripple">
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
      Four-layer PCB prototype for a compact dual-rail power delivery concept
      targeting efficient silicon-to-wide-bandgap interface rails.
    </p>

    <ul class="proj-bullets">
      <li>Developed a complete schematic-to-layout workflow in Altium Designer for a research prototype power board</li>
      <li>Applied EMI-aware stackup and routing practices to support high-frequency switching and clean return paths</li>
      <li>Designed top and bottom signal/power routing with dedicated internal reference planes for improved signal integrity</li>
      <li>Prepared manufacturing outputs (Gerbers/drill files) and documentation for prototype fabrication and testing</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Altium</span>
      <span class="tag">4-Layer PCB</span>
      <span class="tag">EMI</span>
      <span class="tag">Power Integrity</span>
      <span class="tag">Prototype</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/pcb/Schematic.png" alt="PCB schematic">
        <img class="carousel-slide" src="/assets/images/projects/pcb/Top-Layer.png" alt="PCB top layer routing">
        <img class="carousel-slide" src="/assets/images/projects/pcb/Bottom_Layer.png" alt="PCB bottom layer routing">
      </div>
      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>


<!-- =========================================================
     PROJECT — HIGH-VOLTAGE BUCK CONVERTER PCB DESIGN (KiCad)
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      High-Voltage Buck Converter PCB Design (KiCad)
    </h3>

    <p class="proj-sub">
      Complete schematic-to-layout workflow for a high-voltage synchronous
      buck converter, including custom footprint design, 4-layer PCB layout,
      and EMI-aware power routing using KiCad.
    </p>

    <ul class="proj-bullets">
      <li>Designed a synchronous half-bridge buck converter schematic in KiCad based on analytical CCM design calculations</li>
      <li>Selected and integrated 650 V SiC MOSFETs, high-side gate driver, bootstrap network, and passive components</li>
      <li>Manually created a custom PCB footprint for a non-standard SiC MOSFET package using datasheet dimensions</li>
      <li>Developed a complete 4-layer PCB stackup: Front (signals & switching), Inner GND, Inner POWER, and Back layer</li>
      <li>Applied EMI-aware layout practices to minimize high di/dt loop area and gate-drive parasitics</li>
      <li>Ensured tight gate-loop routing with individual gate resistors and close driver–MOSFET placement</li>
      <li>Implemented solid ground and power planes to reduce impedance, noise coupling, and voltage drop</li>
      <li>Validated mechanical clearances, footprint accuracy, and assembly feasibility using 3D PCB rendering</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">KiCad</span>
      <span class="tag">PCB Design</span>
      <span class="tag">4-Layer Board</span>
      <span class="tag">High Voltage</span>
      <span class="tag">SiC MOSFET</span>
      <span class="tag">Gate Driver</span>
      <span class="tag">EMI-Aware Layout</span>
      <span class="tag">3D PCB</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/kikad/Schematic_v2.png" alt="KiCad schematic of synchronous buck converter">
        <img class="carousel-slide" src="/assets/images/projects/kikad/Front_Layer.png" alt="Front copper layer showing switching and gate-drive routing">
        <img class="carousel-slide" src="/assets/images/projects/kikad/Inner_Layer_GND.png" alt="Inner ground plane for low-impedance return paths">
        <img class="carousel-slide" src="/assets/images/projects/kikad/Inner_Layer_POWER.png" alt="Inner power plane with wide copper pours">
        <img class="carousel-slide" src="/assets/images/projects/kikad/Back_Layer.png" alt="Back copper layer for auxiliary routing and stitching">
        <img class="carousel-slide" src="/assets/images/projects/kikad/PCB_3D.png" alt="3D rendered view of the complete PCB assembly">
      </div>

      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>



<!-- =========================================================
     PROJECT 3 — TCAD → SPICE → CIRCUIT (WORK IN PROGRESS)
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      TCAD → Compact Modeling → Circuit-Level Validation
    </h3>

    <p class="proj-sub">
      Physics-aware device modeling pipeline bridging TCAD simulations
      and real circuit behavior.
    </p>

    <ul class="proj-bullets">
      <li>Developed detailed TCAD device structures and physics setups for power and emerging WBG devices</li>
      <li>Generated DC, AC, and transient datasets tailored for compact model extraction</li>
      <li>Performed model calibration and consistency checks prior to circuit insertion</li>
      <li>Integrated extracted models into Spectre for converter and block-level verification</li>
      <li>Investigating switching behavior, parasitics, bias dependence, and numerical robustness</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">TCAD</span>
      <span class="tag">Compact Modeling</span>
      <span class="tag">SPICE</span>
      <span class="tag">Spectre</span>
      <span class="tag">Work in Progress</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="proj-placeholder">
      <!-- =========================================================
    <img src="/assets/images/projects/tcad/wip.jpg" alt="TCAD to circuit workflow (work in progress)"> 
========================================================= -->
      <div class="proj-overlay">
        <span>Work in Progress</span>
      </div>
    </div>
  </div>

</div>

<!-- =========================================================
     PROJECT — PHASE-LOCKED LOOP (PLL)
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      Phase-Locked Loop (PLL) — Transistor-Level Design
    </h3>

    <p class="proj-sub">
      Fully custom phase-locked loop designed from scratch in Cadence Virtuoso,
      including PFD, charge pump, current-starved VCO, and frequency divider,
      validated through transient and steady-state simulations.
    </p>

    <ul class="proj-bullets">
      <li>Designed a complete PLL architecture using Cadence analog libraries with full transistor-level implementation</li>
      <li>Implemented a Phase Frequency Detector (PFD) with reset logic to eliminate dead-zone effects</li>
      <li>Designed a low-leakage charge pump ensuring matched up/down currents for minimal static phase error</li>
      <li>Developed a current-starved VCO with controllable oscillation frequency via control voltage tuning</li>
      <li>Integrated a frequency divider to enable frequency synthesis and feedback stabilization</li>
      <li>Validated lock acquisition, steady-state phase tracking, and frequency stability through transient simulations</li>
      <li>Analyzed loop behavior including tuning range, lock time, and control-voltage dynamics</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Cadence Virtuoso</span>
      <span class="tag">PLL</span>
      <span class="tag">PFD</span>
      <span class="tag">Charge Pump</span>
      <span class="tag">VCO</span>
      <span class="tag">Frequency Divider</span>
      <span class="tag">Analog IC Design</span>
      <span class="tag">Transient Simulation</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/pll/PLL0.png" alt="PLL top-level architecture">
        <img class="carousel-slide" src="/assets/images/projects/pll/PLL1.png" alt="Phase Frequency Detector (PFD) schematic">
        <img class="carousel-slide" src="/assets/images/projects/pll/PLL2.png" alt="Charge pump circuit implementation">
        <img class="carousel-slide" src="/assets/images/projects/pll/PLL3.png" alt="Current-starved VCO schematic">
        <img class="carousel-slide" src="/assets/images/projects/pll/PLL4.png" alt="Frequency divider block">
        <img class="carousel-slide" src="/assets/images/projects/pll/PLL5.png" alt="PLL transient response and lock behavior">
        <img class="carousel-slide" src="/assets/images/projects/pll/PLL6.png" alt="Control voltage and VCO frequency tuning">
        <img class="carousel-slide" src="/assets/images/projects/pll/PLL7.png" alt="Locked steady-state waveform verification">
      </div>

      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>


<!-- =========================================================
     PROJECT — AUTOMATED TRAFFIC CONTROL SYSTEM
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      Automated Traffic Control System (Digital Logic Based)
    </h3>

    <p class="proj-sub">
      Fully hardware-based automated traffic control system designed for a
      real-world five-road intersection (“Chankharpurl More”), implemented
      without microcontrollers or Arduino, using discrete logic ICs.
    </p>

    <ul class="proj-bullets">
      <li>Designed an automated traffic control system for a complex 5-way circular intersection</li>
      <li>Implemented complete control logic using digital ICs only, avoiding microprocessors and Arduino</li>
      <li>Developed timing and sequencing logic to manage safe traffic flow across all directions</li>
      <li>Simulated the full system behavior in Proteus to verify correctness and timing coordination</li>
      <li>Physically built and tested the system at hardware level using logic gates, counters, and timers</li>
      <li>Ensured proper signal transitions and fail-safe operation to prevent conflicting green signals</li>
      <li>Demonstrated a low-cost, reliable solution suitable for small urban intersections</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Digital Logic Design</span>
      <span class="tag">Traffic Control</span>
      <span class="tag">Proteus</span>
      <span class="tag">Hardware Implementation</span>
      <span class="tag">Logic ICs</span>
      <span class="tag">Counters</span>
      <span class="tag">Timers</span>
      <span class="tag">No Microcontroller</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/dld/dld1.png" alt="Traffic intersection layout and control concept">
        <img class="carousel-slide" src="/assets/images/projects/dld/dld2.jpg" alt="Digital logic schematic for traffic sequencing">
        <img class="carousel-slide" src="/assets/images/projects/dld/dld3.png" alt="Proteus simulation of traffic control logic">
        <img class="carousel-slide" src="/assets/images/projects/dld/dld4.jpg" alt="Timing and state transition verification">
        <img class="carousel-slide" src="/assets/images/projects/dld/dld5.jpg" alt="Hardware implementation using logic ICs">
        <img class="carousel-slide" src="/assets/images/projects/dld/dld6.jpg" alt="Physical prototype testing and validation">
        <img class="carousel-slide" src="/assets/images/projects/dld/dld7.jpg" alt="Final working demonstration of traffic control system">
      </div>

      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>

<!-- =========================================================
     PROJECT — ECG-BASED BIOMETRIC RECOGNITION
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      ECG-Based Biometric Recognition System
    </h3>

    <p class="proj-sub">
      Signal-processing and machine-learning–based biometric authentication
      system using ECG signals, featuring robust preprocessing, feature
      extraction, and classification with cross-validation.
    </p>

    <ul class="proj-bullets">
      <li>Developed a biometric recognition system using electrocardiogram (ECG) signals as unique physiological identifiers</li>
      <li>Applied Chebyshev low-pass filtering and median filtering to remove noise and baseline wander</li>
      <li>Performed feature extraction using Maximal Overlap Discrete Wavelet Transform (MODWT)</li>
      <li>Designed a classification framework using Weighted K-Nearest Neighbors (WKNN) with Euclidean distance</li>
      <li>Evaluated system performance using 5-fold cross-validation to ensure robustness and generalization</li>
      <li>Analyzed classification accuracy, sensitivity, and subject discrimination capability</li>
      <li>Demonstrated feasibility of ECG signals for secure, non-invasive biometric authentication</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">ECG</span>
      <span class="tag">Biomedical Signal Processing</span>
      <span class="tag">DSP</span>
      <span class="tag">Wavelet Transform</span>
      <span class="tag">KNN</span>
      <span class="tag">Pattern Recognition</span>
      <span class="tag">MATLAB</span>
      <span class="tag">Biometrics</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/ecg/DSP.jpg" alt="Raw ECG signal and acquisition overview">
        <img class="carousel-slide" src="/assets/images/projects/ecg/DSP2.png" alt="ECG preprocessing and noise filtering">
        <img class="carousel-slide" src="/assets/images/projects/ecg/DSP3.png" alt="Filtered ECG waveform comparison">
        <img class="carousel-slide" src="/assets/images/projects/ecg/DSP4.png" alt="Wavelet decomposition using MODWT">
        <img class="carousel-slide" src="/assets/images/projects/ecg/DSP5.png" alt="Feature extraction from ECG signals">
        <img class="carousel-slide" src="/assets/images/projects/ecg/DSP6.png" alt="KNN-based classification workflow">
        <img class="carousel-slide" src="/assets/images/projects/ecg/DSP7.png" alt="Distance metrics and decision boundaries">
        <img class="carousel-slide" src="/assets/images/projects/ecg/DSP8.png" alt="Cross-validation performance results">
        <img class="carousel-slide" src="/assets/images/projects/ecg/DSP9.png" alt="Final biometric recognition accuracy and results">
      </div>

      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>

<!-- =========================================================
     PROJECT — IEEE 39-BUS HVDC & INDUSTRIAL LOAD IMPACT STUDY
========================================================= -->
<div class="proj-card">

  <div class="proj-text">
    <h3 class="proj-title">
      Impact of HVDC Connection & Large Industrial Loads on IEEE 39-Bus System
    </h3>

    <p class="proj-sub">
      Power system stability and load-flow analysis of the IEEE 39-bus network,
      investigating voltage stability, line loading, and mitigation strategies
      under HVDC integration and large industrial loads using PSAF.
    </p>

    <ul class="proj-bullets">
      <li>Performed detailed load-flow analysis of the IEEE 39-bus power system using the Newton–Raphson method</li>
      <li>Modeled and integrated a point-to-point HVDC link between Bus-39 and Bus-9 to study system-level impacts</li>
      <li>Introduced large industrial loads modeled as induction motors to emulate real-world plant behavior</li>
      <li>Identified abnormal bus voltages, line overloads, and stability degradation due to heavy loading</li>
      <li>Designed and placed Static VAR Compensators (SVCs) to improve voltage regulation and system stability</li>
      <li>Compared pre- and post-mitigation bus reports to validate effectiveness of compensation strategies</li>
      <li>Demonstrated coordinated use of HVDC and reactive power support for robust grid operation</li>
    </ul>

    <div class="proj-tags">
      <span class="tag">Power System Analysis</span>
      <span class="tag">IEEE 39-Bus</span>
      <span class="tag">HVDC</span>
      <span class="tag">Industrial Loads</span>
      <span class="tag">Induction Motors</span>
      <span class="tag">SVC</span>
      <span class="tag">PSAF</span>
      <span class="tag">Load Flow</span>
    </div>
  </div>

  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active" src="/assets/images/projects/psaf/Methodology.png" alt="Overall methodology for IEEE 39-bus HVDC study">
        <img class="carousel-slide" src="/assets/images/projects/psaf/Addition-of-HVDC-Line.png" alt="HVDC line added between Bus 39 and Bus 9">
        <img class="carousel-slide" src="/assets/images/projects/psaf/Abnormal-Record-1.png" alt="Abnormal voltage and loading conditions before compensation">
        <img class="carousel-slide" src="/assets/images/projects/psaf/Report-2.png" alt="Bus report showing system performance under industrial load">
        <img class="carousel-slide" src="/assets/images/projects/psaf/Report-3.png" alt="Line loading and voltage profile analysis">
        <img class="carousel-slide" src="/assets/images/projects/psaf/Bus-Report-After-All-SVC-connection.png" alt="Improved bus voltages after SVC integration">
        <img class="carousel-slide" src="/assets/images/projects/psaf/solution.png" alt="Final stabilized system with HVDC and SVC coordination">
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

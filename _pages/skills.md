---
title: "Skills"
permalink: /skills/
layout: default
author_profile: false
classes: wide
---

<div class="wrap" markdown="1">

<style>
/* ===== Layout ===== */
.page-grid{
  display:grid;
  grid-template-columns:260px 1fr;
  gap:28px;
  align-items:start;
}
@media(max-width:900px){
  .page-grid{grid-template-columns:1fr;}
}

/* ===== Author card ===== */
.author-card{
  position:sticky;
  top:90px;
  border:1px solid #e5e7eb;
  border-radius:14px;
  padding:16px;
  background:#fff;
}
@media(max-width:900px){
  .author-card{position:static;}
}
.author-avatar{
  width:110px;height:110px;border-radius:999px;
  object-fit:cover;display:block;margin:0 auto 10px;
}
.author-name{text-align:center;font-weight:800;margin:0;}
.author-bio{text-align:center;color:#6b7280;margin:6px 0 12px;font-size:.95rem;}
.author-links{list-style:none;padding:0;margin:0;}
.author-links li{margin:8px 0;}
.author-links a{display:inline-flex;gap:8px;align-items:center;text-decoration:none;}

/* ===== Skills table ===== */
.skills-table{
  width:100%;
  border:1px solid #e5e7eb;
  border-radius:16px;
  overflow:hidden;
  background:#fff;
}

.skill-row{
  display:grid;
  grid-template-columns: 130px 260px 1fr;
  gap:18px;
  padding:16px;
  border-bottom:1px solid #f1f5f9;
  align-items:center;
}
.skill-row:last-child{border-bottom:none;}

@media(max-width:900px){
  .skill-row{
    grid-template-columns: 1fr;
    gap:12px;
  }
}

/* ===== Logo ===== */
.skill-logo{
  width:120px;height:90px;
  border:1px solid #e5e7eb;
  border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  padding:12px;background:#fff;
}
.skill-logo img{
  max-width:100%;
  max-height:100%;
  object-fit:contain;
}

/* ===== Bar ===== */
.skill-bar{
  height:14px;
  border-radius:999px;
  background:#eef2f7;
  overflow:hidden;
  border:1px solid #e5e7eb;
}
.skill-fill{
  height:100%;
  border-radius:999px;
  background:linear-gradient(90deg,#2563eb,#22c55e);
}

/* ===== Text ===== */
.skill-title{
  font-weight:800;
  margin:0 0 6px 0;
}
.skill-desc{
  margin:0;
  color:#6b7280;
  line-height:1.4;
}
</style>

<div class="page-grid">

<!-- LEFT -->
<aside class="author-card">
  <img class="author-avatar" src="/assets/images/profile.JPG">
  <p class="author-name">Md Yekra Rahman</p>
  <p class="author-bio">PhD Student, Mizzou</p>
  <ul class="author-links">
    <li><a href="mailto:mrvpx@missouri.edu"><i class="fas fa-envelope"></i>Email</a></li>
    <li><a href="https://github.com/MdYekraRahman" target="_blank"><i class="fab fa-github"></i>GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/mdyekrarahman/" target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</a></li>
  </ul>
</aside>

<!-- RIGHT -->
<main>

<div class="skills-table">

<!-- Cadence -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Cadence-Logo.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:95%"></div></div>
  <div>
    <p class="skill-title">Cadence Virtuoso / Spectre / ADE</p>
    <p class="skill-desc">
      Full analog/mixed-signal IC flow: schematic & layout, DC/AC/Transient/Noise analysis,
      Monte Carlo & corner simulations, DRC/LVS, parasitic extraction, and SKILL/OCEAN automation.
    </p>
  </div>
</div>

<!-- LTspice -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/LtSpice-logo.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
  <div>
    <p class="skill-title">LTspice</p>
    <p class="skill-desc">
      Fast prototyping of power and analog circuits, behavioral sources,
      custom SPICE models, and performance validation using .meas directives.
    </p>
  </div>
</div>

<!-- MATLAB -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/MATLAB-Symbol.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:99%"></div></div>
  <div>
    <p class="skill-title">MATLAB</p>
    <p class="skill-desc">
      Design automation, numerical analysis, optimization sweeps, data visualization,
      and control-oriented modeling.
    </p>
  </div>
</div>

<!-- Altium -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Altium-Logo.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
  <div>
    <p class="skill-title">Altium Designer</p>
    <p class="skill-desc">
      4-layer PCB design, custom footprints, layout rules,
      EMI-aware routing, and manufacturing-ready outputs.
    </p>
  </div>
</div>

<div class="skill-row">
  <!-- Logo -->
  <div class="skill-logo">
    <img src="/assets/images/logos/KiCad-Logo.png" alt="KiCad">
  </div>

  <!-- Skill level -->
  <div class="skill-barwrap">
    <div class="skill-bar">
      <div class="skill-fill" style="width:80%;"></div>
    </div>
  </div>

  <!-- Description -->
  <div class="skill-meta">
    <p class="skill-title">KiCAD</p>
    <p class="skill-desc">
      Complete 4-layer PCB workflow with HV design considerationsa and from custom symbol and footprint library management to fabrication output generation.
    </p>
  </div>
</div>

<!-- PLECS -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/plecs-logo.png"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:70%"></div></div>
  <div>
    <p class="skill-title">PLECS</p>
    <p class="skill-desc">
      System-level power electronics simulation, steady-state analysis,
      and small-signal control modeling.
    </p>
  </div>
</div>

<!-- Silvaco -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/SILVACO_Logo.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div>
  <div>
    <p class="skill-title">Silvaco TCAD</p>
    <p class="skill-desc">
      Physics-based device simulation, IV extraction,
      and compact-model preparation for circuit integration.
    </p>
  </div>
</div>

<!-- Lumerical -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Ansys_Lumerical_Logo.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:55%"></div></div>
  <div>
    <p class="skill-title">ANSYS Lumerical FDTD</p>
    <p class="skill-desc">
      Optical and photovoltaic device simulation for undergraduate thesis work.
    </p>
  </div>
</div>

<!-- Quantum ESPRESSO -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Quantum_ESPRESSO_logo.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:55%"></div></div>
  <div>
    <p class="skill-title">Quantum ESPRESSO</p>
    <p class="skill-desc">
      DFT-based material modeling, band structure and DOS analysis,
      and convergence testing.
    </p>
  </div>
</div>

<!-- Quartus -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/quartus-logo.png"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div>
  <div>
    <p class="skill-title">Intel Quartus Prime</p>
    <p class="skill-desc">
      FPGA RTL design in Verilog, FSM implementation,
      simulation and timing analysis.
    </p>
  </div>
</div>

<!-- Programming -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/C_Programming_Language.png"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
  <div>
    <p class="skill-title">C Programming</p>
    <p class="skill-desc">
      Core procedural programming, algorithm design,
      and embedded-oriented problem solving.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Python-logo-notext.svg.png"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:75%"></div></div>
  <div>
    <p class="skill-title">Python</p>
    <p class="skill-desc">
      Automation, data processing, parsing simulation outputs,
      and research tooling.
    </p>
  </div>
</div>

<!-- Instruments -->
<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/tektronix-logo.png"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
  <div>
    <p class="skill-title">Oscilloscope</p>
    <p class="skill-desc">
      High-speed signal probing, waveform analysis,
      debugging and measurement documentation.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Agilent-33120A.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:85%"></div></div>
  <div>
    <p class="skill-title">Signal Generator</p>
    <p class="skill-desc">
      Precise waveform generation, modulation,
      sweep configuration and test stimulus.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/SLx_01_0224.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div>
  <div>
    <p class="skill-title">Magna-Power DC Supply</p>
    <p class="skill-desc">
      High-voltage programmable DC supply operation for power device testing.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/alx_front.jpg"></div>
  <div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div>
  <div>
    <p class="skill-title">MagnaLOAD Electronic Load</p>
    <p class="skill-desc">
      High-power DC electronic load for current sinking,
      characterization and stress testing.
    </p>
  </div>
</div>

</div>

</main>

</div>
</div>

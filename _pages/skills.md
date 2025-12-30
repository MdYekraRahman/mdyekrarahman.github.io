---
title: "Skills"
permalink: /skills/
layout: default
author_profile: false
classes: wide
---

<div class="wrap" markdown="1">

<style>
  .page-grid{display:grid;grid-template-columns:260px 1fr;gap:28px;align-items:start;}
  @media(max-width:900px){.page-grid{grid-template-columns:1fr;}}

  .author-card{position:sticky;top:90px;border:1px solid #e5e7eb;border-radius:14px;padding:16px;background:#fff;}
  @media(max-width:900px){.author-card{position:static;}}
  .author-avatar{width:110px;height:110px;border-radius:999px;object-fit:cover;display:block;margin:0 auto 10px;}
  .author-name{text-align:center;font-weight:800;margin:0;}
  .author-bio{text-align:center;color:#6b7280;margin:6px 0 12px;font-size:.95rem;}

  .skills-hero{
    border:1px solid #e5e7eb;border-radius:16px;padding:18px;
    background:linear-gradient(180deg,rgba(243,244,246,.7),#fff);
    margin-bottom:18px;
  }

  .skills-table{
    width:100%;
    border:1px solid #e5e7eb;
    border-radius:16px;
    overflow:hidden;
    background:#fff;
  }

  .skill-row{
    display:grid;
    grid-template-columns: 110px 240px 1fr;
    gap:14px;
    padding:14px;
    border-bottom:1px solid #f0f2f5;
    align-items:center;
  }
  .skill-row:last-child{border-bottom:none;}

  .skill-logo{
    width:96px;height:72px;
    border:1px solid #e5e7eb;border-radius:14px;
    display:flex;align-items:center;justify-content:center;
    background:#fff;padding:10px;
  }
  .skill-logo img{max-width:100%;max-height:100%;object-fit:contain;}

  .skill-bar{
    width:100%;height:12px;border-radius:999px;
    background:#eef2f7;overflow:hidden;border:1px solid #e5e7eb;
  }
  .skill-fill{
    height:100%;
    border-radius:999px;
    background:linear-gradient(90deg,#2563eb,#22c55e);
  }

  .skill-meta .title{font-weight:800;margin:0 0 6px 0;}
  .skill-meta .desc{margin:0;color:#6b7280;font-size:.95rem;line-height:1.35;}
</style>

<div class="page-grid">

<!-- LEFT PROFILE -->
<aside class="author-card">
  <img class="author-avatar" src="/assets/images/profile.JPG">
  <p class="author-name">Md Yekra Rahman</p>
  <p class="author-bio">PhD Student, Mizzou</p>
</aside>

<!-- RIGHT CONTENT -->
<main markdown="1">

<div class="skills-hero">
  <h2><i class="fas fa-tools"></i> Technical Skills</h2>
  <p>Specialized in Analog IC design, Power Electronics, Semiconductor modeling, and experimental validation.</p>
</div>

<div class="skills-table">

<!-- ================= CORE ANALOG & POWER ================= -->

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Cadence-Logo.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:95%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Cadence Virtuoso / Spectre / Layout</p>
    <p class="desc">
      Full analog IC design flow: schematic, layout, DRC/LVS, parasitic extraction, Monte Carlo, corners, noise, and stability analysis using ADE XL & Spectre.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/LtSpice-logo.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div></div>
  <div class="skill-meta">
    <p class="title">LTspice</p>
    <p class="desc">
      Rapid power and mixed-signal prototyping, custom SPICE models, behavioral sources, transient/AC sweeps, and performance validation.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Altium-Logo.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Altium Designer</p>
    <p class="desc">
      4-layer PCB design, EMI-aware layout, custom footprints, power planes, DRC/ERC, Gerber & BOM generation.
    </p>
  </div>
</div>

<!-- ================= MODELING & DEVICE ================= -->

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/SILVACO_Logo.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Silvaco TCAD</p>
    <p class="desc">
      Physics-based semiconductor device simulation, IV extraction, and compact model preparation for circuit integration.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Ansys_Lumerical_Logo.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:55%"></div></div></div>
  <div class="skill-meta">
    <p class="title">ANSYS Lumerical FDTD</p>
    <p class="desc">
      Optical and photovoltaic device simulation and field-level optimization (undergraduate thesis).
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Quantum_ESPRESSO_logo.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:55%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Quantum ESPRESSO</p>
    <p class="desc">
      DFT-based material modeling, band structure, DOS/PDOS, and convergence studies.
    </p>
  </div>
</div>

<!-- ================= CONTROL / DIGITAL ================= -->

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/plecs-logo.png"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:70%"></div></div></div>
  <div class="skill-meta">
    <p class="title">PLECS</p>
    <p class="desc">
      Fast system-level simulation for power converters, control loops, and small-signal modeling.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/quartus-logo.png"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Intel Quartus</p>
    <p class="desc">
      FPGA design using Verilog, FSM implementation, RTL simulation, and timing basics.
    </p>
  </div>
</div>

<!-- ================= PROGRAMMING ================= -->

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/MATLAB-Symbol.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:99%"></div></div></div>
  <div class="skill-meta">
    <p class="title">MATLAB / Simulink</p>
    <p class="desc">
      Numerical analysis, optimization, automation, converter modeling, plotting, and coursework tooling.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Python-logo-notext.svg.png"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:75%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Python</p>
    <p class="desc">
      Data parsing, automation, plotting, and research workflow scripting.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/C_Programming_Language.png"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div></div>
  <div class="skill-meta">
    <p class="title">C Language</p>
    <p class="desc">
      Core programming, algorithms, and embedded-oriented logic development.
    </p>
  </div>
</div>

<!-- ================= MEASUREMENT ================= -->

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/tektronix-logo.png"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Oscilloscope</p>
    <p class="desc">
      Signal probing, switching waveform analysis, timing, frequency, and noise measurements.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/Agilent-33120A.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:85%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Signal Generator</p>
    <p class="desc">
      Waveform generation, modulation, sweep configuration, and stimulus control.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/SLx_01_0224.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div></div>
  <div class="skill-meta">
    <p class="title">Magna-Power DC Supply</p>
    <p class="desc">
      High-voltage programmable DC source operation for power device testing.
    </p>
  </div>
</div>

<div class="skill-row">
  <div class="skill-logo"><img src="/assets/images/logos/alx_front.jpg"></div>
  <div><div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div></div>
  <div class="skill-meta">
    <p class="title">MagnaLOAD Electronic Load</p>
    <p class="desc">
      High-current programmable DC load for converter and device characterization.
    </p>
  </div>
</div>

</div>

</main>
</div>
</div>

---
title: "Skills"
permalink: /skills/
layout: default
author_profile: false
classes: wide
---

<div class="wrap" markdown="1">

<style>
  /* ====== Layout (same style as your other pages) ====== */
  .page-grid{display:grid;grid-template-columns:260px 1fr;gap:28px;align-items:start;}
  @media(max-width:900px){.page-grid{grid-template-columns:1fr;}}

  /* ====== Author card ====== */
  .author-card{position:sticky;top:90px;border:1px solid #e5e7eb;border-radius:14px;padding:16px;background:#fff;}
  @media(max-width:900px){.author-card{position:static;}}
  .author-avatar{width:110px;height:110px;border-radius:999px;object-fit:cover;display:block;margin:0 auto 10px;}
  .author-name{text-align:center;font-weight:800;margin:0;}
  .author-bio{text-align:center;color:#6b7280;margin:6px 0 12px;font-size:.95rem;}
  .author-links{list-style:none;padding:0;margin:0;}
  .author-links li{margin:8px 0;}
  .author-links a{display:inline-flex;gap:8px;align-items:center;text-decoration:none;}

  /* ====== Header card ====== */
  .skills-hero{
    border:1px solid #e5e7eb;border-radius:16px;padding:18px;
    background:linear-gradient(180deg,rgba(243,244,246,.7),#fff);
    margin-bottom:18px;
  }

  /* ====== Skills table ====== */
  .skills-table{
    width:100%;
    border:1px solid #e5e7eb;
    border-radius:16px;
    overflow:hidden;
    background:#fff;
  }

  /* header row */
  .skills-head{
    display:grid;
    grid-template-columns: 110px 240px 1fr;
    gap:14px;
    padding:14px 14px;
    background:rgba(243,244,246,.65);
    border-bottom:1px solid #e5e7eb;
    font-weight:700;
  }

  /* each row */
  .skill-row{
    display:grid;
    grid-template-columns: 110px 240px 1fr;
    gap:14px;
    padding:14px 14px;
    border-bottom:1px solid #f0f2f5;
    align-items:center;
  }
  .skill-row:last-child{border-bottom:none;}

  /* responsive: stack bar + description under logo */
  @media(max-width:900px){
    .skills-head{display:none;}
    .skill-row{
      grid-template-columns: 86px 1fr;
      grid-template-areas:
        "logo text"
        "bar  bar";
      gap:12px;
    }
    .skill-logo{grid-area:logo;}
    .skill-meta{grid-area:text;}
    .skill-barwrap{grid-area:bar;}
  }

  /* logo cell */
  .skill-logo{
    width:96px;height:72px;
    border:1px solid #e5e7eb;
    border-radius:14px;
    display:flex;align-items:center;justify-content:center;
    background:#fff;
    padding:10px;
  }
  .skill-logo img{
    max-width:100%;
    max-height:100%;
    object-fit:contain;
  }

  /* description */
  .skill-meta .title{
    font-weight:800;
    margin:0 0 6px 0;
    line-height:1.15;
  }
  .skill-meta .desc{
    margin:0;
    color:#6b7280;
    line-height:1.35;
    font-size:.95rem;
  }

  /* bar */
  .skill-barwrap{
    display:flex;
    flex-direction:column;
    gap:6px;
  }
  .skill-bar{
    width:100%;
    height:12px;
    border-radius:999px;
    background:#eef2f7;
    overflow:hidden;
    border:1px solid #e5e7eb;
  }
  .skill-fill{
    height:100%;
    border-radius:999px;
    background:linear-gradient(90deg,#2563eb,#22c55e); /* you said any color is fine */
  }
  .skill-pct{
    font-size:.85rem;
    color:#6b7280;
  }

  /* small helper text */
  .muted{color:#6b7280;}
</style>

<div class="page-grid">

<!-- LEFT: profile -->
<aside class="author-card">
  <img class="author-avatar" src="/assets/images/profile.JPG" alt="Md Yekra Rahman">
  <p class="author-name">Md Yekra Rahman</p>
  <p class="author-bio">PhD Student, Mizzou</p>
  <ul class="author-links">
    <li><a href="mailto:mrvpx@missouri.edu"><i class="fas fa-envelope"></i>Email</a></li>
    <li><a href="https://github.com/MdYekraRahman" target="_blank" rel="noopener"><i class="fab fa-github"></i>GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/mdyekrarahman/" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i>LinkedIn</a></li>
  </ul>
</aside>

<!-- RIGHT: content -->
<main markdown="1">

<div class="skills-hero">
  <h2 style="margin:0 0 6px 0;"><i class="fas fa-tools"></i> Skills</h2>
  <p class="muted" style="margin:0;">
    Logo → proficiency bar → what I’ve built / simulated / designed using the tool.
  </p>
</div>

<div class="skills-table">

  <div class="skills-head">
    <div>Tool</div>
    <div>Proficiency</div>
    <div>What I used it for</div>
  </div>

  <!-- ====== EDIT ONLY THE % AND DESCRIPTION TEXTS BELOW ====== -->

  <!-- Cadence -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Cadence-Logo.jpg" alt="Cadence"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:90%;"></div></div>
      <div class="skill-pct">90%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Cadence Virtuoso / ADE / Spectre</p>
      <p class="desc">Analog & power IC design flow: schematics, testbenches, corner checks, transient/AC/noise sims, verification mindset.</p>
    </div>
  </div>

  <!-- LTspice -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/LtSpice-logo.jpg" alt="LTspice"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:85%;"></div></div>
      <div class="skill-pct">85%</div>
    </div>
    <div class="skill-meta">
      <p class="title">LTspice</p>
      <p class="desc">Fast converter prototyping, param sweeps, waveform analysis, sanity checks before full Cadence/Spectre verification.</p>
    </div>
  </div>

  <!-- MATLAB -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/MATLAB-Symbol.jpg" alt="MATLAB"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:85%;"></div></div>
      <div class="skill-pct">85%</div>
    </div>
    <div class="skill-meta">
      <p class="title">MATLAB</p>
      <p class="desc">Data processing, automation scripts, design calculations, optimization sweeps, plots for papers/classes.</p>
    </div>
  </div>

  <!-- Simulink -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Simulink_Logo.png" alt="Simulink"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:70%;"></div></div>
      <div class="skill-pct">70%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Simulink</p>
      <p class="desc">Control-oriented modeling and quick validation of dynamic behavior (controller ideas, system blocks, responses).</p>
    </div>
  </div>

  <!-- PLECS -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/plecs-logo.png" alt="PLECS"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:70%;"></div></div>
      <div class="skill-pct">70%</div>
    </div>
    <div class="skill-meta">
      <p class="title">PLECS</p>
      <p class="desc">Power electronics system simulation, switching behavior, and control validation workflows.</p>
    </div>
  </div>

  <!-- Altium -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Altium-Logo.jpg" alt="Altium"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:80%;"></div></div>
      <div class="skill-pct">80%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Altium Designer</p>
      <p class="desc">Schematic + PCB layout, custom symbols/footprints, DRC, EMI-aware layout basics, Gerber export.</p>
    </div>
  </div>

  <!-- Silvaco -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/SILVACO_Logo.jpg" alt="Silvaco"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:70%;"></div></div>
      <div class="skill-pct">70%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Silvaco (TCAD)</p>
      <p class="desc">Device-level simulation, extracting behavior trends, and connecting device physics to circuit-level implications.</p>
    </div>
  </div>

  <!-- Lumerical -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Ansys_Lumerical_Logo.jpg" alt="Lumerical"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:55%;"></div></div>
      <div class="skill-pct">55%</div>
    </div>
    <div class="skill-meta">
      <p class="title">ANSYS Lumerical FDTD</p>
      <p class="desc">Optical simulation workflows (device structures, field distributions, photonic behavior studies).</p>
    </div>
  </div>

  <!-- Quantum ESPRESSO -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Quantum_ESPRESSO_logo.jpg" alt="Quantum ESPRESSO"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:55%;"></div></div>
      <div class="skill-pct">55%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Quantum ESPRESSO</p>
      <p class="desc">DFT-based material simulations and analysis workflows (band structure / material property exploration).</p>
    </div>
  </div>

  <!-- Quartus -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/quartus-logo.png" alt="Quartus"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:60%;"></div></div>
      <div class="skill-pct">60%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Intel Quartus</p>
      <p class="desc">Digital design flow basics: synth/compile, FPGA project setup, verification fundamentals.</p>
    </div>
  </div>

  <!-- ARM -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/ARM_logo.png" alt="ARM"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:60%;"></div></div>
      <div class="skill-pct">60%</div>
    </div>
    <div class="skill-meta">
      <p class="title">ARM</p>
      <p class="desc">Embedded fundamentals and ARM ecosystem familiarity for microcontroller-based development workflows.</p>
    </div>
  </div>

  <!-- C -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/C_Programming_Language.png" alt="C"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:70%;"></div></div>
      <div class="skill-pct">70%</div>
    </div>
    <div class="skill-meta">
      <p class="title">C</p>
      <p class="desc">Embedded-level programming fundamentals, structured coding, debugging mindset, and algorithm implementation.</p>
    </div>
  </div>

  <!-- Python -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Python-logo-notext.svg.png" alt="Python"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:75%;"></div></div>
      <div class="skill-pct">75%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Python</p>
      <p class="desc">Automation scripts, parsing simulation outputs, plotting, data cleanup, quick tooling for research workflows.</p>
    </div>
  </div>

  <!-- NumPy -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/numpy_logo-freelogovectors.net_.png" alt="NumPy"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:70%;"></div></div>
      <div class="skill-pct">70%</div>
    </div>
    <div class="skill-meta">
      <p class="title">NumPy</p>
      <p class="desc">Numerical computing for analysis scripts, curve processing, automation, and custom computation workflows.</p>
    </div>
  </div>

  <!-- Tektronix -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/tektronix-logo.png" alt="Tektronix"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:65%;"></div></div>
      <div class="skill-pct">65%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Tektronix</p>
      <p class="desc">Lab measurement workflows: oscilloscopes and instrument-driven debugging (switching waveforms, signal integrity).</p>
    </div>
  </div>

  <!-- Keysight -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Keysight_Pref_Logo_Color.jpg" alt="Keysight"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:60%;"></div></div>
      <div class="skill-pct">60%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Keysight</p>
      <p class="desc">Instrument familiarity for measurement workflows and lab validation (bench tools, waveform acquisition mindset).</p>
    </div>
  </div>

  <!-- Agilent 33120A -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Agilent-33120A.jpg" alt="Agilent 33120A"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:55%;"></div></div>
      <div class="skill-pct">55%</div>
    </div>
    <div class="skill-meta">
      <p class="title">Agilent 33120A</p>
      <p class="desc">Function generator usage for lab setups (signal injection, stimulus creation, basic bench workflow).</p>
    </div>
  </div>

  <!-- SLx_01_0224 -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/SLx_01_0224.jpg" alt="SLx_01_0224"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:50%;"></div></div>
      <div class="skill-pct">50%</div>
    </div>
    <div class="skill-meta">
      <p class="title">SLx_01_0224</p>
      <p class="desc">Add your note here (what tool/instrument this logo represents and how you used it).</p>
    </div>
  </div>

  <!-- alx_front -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/alx_front.jpg" alt="alx_front"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:50%;"></div></div>
      <div class="skill-pct">50%</div>
    </div>
    <div class="skill-meta">
      <p class="title">alx_front</p>
      <p class="desc">Add your note here (what tool/instrument this is and your usage).</p>
    </div>
  </div>

</div>

<p class="muted" style="margin-top:12px;">
  Update any bar by changing the <code>width:XX%</code> in each row.  
  Replace the “Add your note here” lines with your real tasks.
</p>

</main>

</div>
</div>

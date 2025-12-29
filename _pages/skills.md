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
</div>

<div class="skills-table">

  <div class="skills-head">
    <div>Tool</div>
    <div>Proficiency</div>
    <div>What I used it for</div>
  </div>

  <!-- ====== EDIT ONLY THE % AND DESCRIPTION TEXTS BELOW ====== -->

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Cadence-Logo.jpg" alt="Cadence"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:95%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">Cadence Virtuoso / ADE / Spectre / Layout</p>
      <p class="desc">
        End-to-end Analog/Mixed-Signal flow: Virtuoso Schematic & Layout (XL); Simulation via Spectre & HSpice; 
        ADE L/XL/Explorer/Assembler (Maestro) for DC/AC/Tran/Noise, Stability, Monte Carlo, & Corner analysis; 
        Physical Verification (DRC/LVS/ERC) with Assura/PVS/Pegasus; Parasitic Extraction (Quantus/QRC) and automation via SKILL/OCEAN scripting.
      </p>
    </div>
  </div>

  <!-- LTspice -->
<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/LtSpice-logo.jpg" alt="LTspice"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:90%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">LTspice</p>
      <p class="desc">
        Rapid circuit prototyping & simulation (Schematic and Netlist): Transient, AC, DC Sweep, Noise, & Transfer Function analysis;
        Importing 3rd-party SPICE/PSpice models & subcircuits; Custom hierarchy & symbol creation; 
        Behavioral voltage/current sources (B-sources), and performance validation via Measurement directives (.meas).
      </p>
    </div>
  </div>

  <!-- MATLAB -->
  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/MATLAB-Symbol.jpg" alt="MATLAB"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:99%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">MATLAB</p>
      <p class="desc">Data processing, automation scripts, design calculations, optimization sweeps, plots for papers/classes.</p>
    </div>
  </div>

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/plecs-logo.png" alt="PLECS"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:70%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">PLECS</p>
      <p class="desc">
        High-speed system-level simulation for power electronics courseworks; Transient, Steady-State Analysis, & Small-Signal AC Sweeps (Loop Gain/Bode plots); 
      </p>
    </div>
  </div>

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Altium-Logo.jpg" alt="Altium"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:90%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">Altium Designer</p>
      <p class="desc">
        Full-cycle 4-layer PCB design (Schematic to Gerber); Custom Integrated Library creation (Symbols, Footprints, 3D Bodies); 
        Layer Stackup Manager; DRC/ERC validation; and generation of fabrication files (Gerber X2, NC Drill, BOM).
      </p>
    </div>
  </div>

  <div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/KiCad-Logo.png" alt="KiCad"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:80%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">KiCad</p>
      <p class="desc">
        Complete 4-layer PCB workflow (Schematic to Gerber); High-Voltage design considerations (Creepage & Clearance rules, Isolation slots); 
        Custom Symbol & Footprint library management; Layer stackup configuration & Power plane generation; 3D Viewer verification, and fabrication output generation (Gerbers, Drill files, BOM).
      </p>
    </div>
  </div>

<!-- Silvaco -->
<div class="skill-row">
  <div class="skill-logo">
    <img src="/assets/images/logos/SILVACO_Logo.jpg" alt="Silvaco">
  </div>
  <div class="skill-barwrap">
    <div class="skill-bar">
      <div class="skill-fill" style="width:60%;"></div>
    </div>
  </div>
  <div class="skill-meta">
    <p class="title">Silvaco TCAD (ATLAS / UTMOST IV)</p>
    <p class="desc">
      End-to-end TCAD workflow: device structure definition, physics-based simulation,
      DC/AC characterization, automated dataset generation (UDS),
      and compact-model preparation for HiSIM2 using UTMOST IV.
    </p>
  </div>
</div>


<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Ansys_Lumerical_Logo.jpg" alt="Lumerical"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:55%;"></div></div>
      <div class="skill-pct">55%</div>
    </div>
    <div class="skill-meta">
      <p class="title">ANSYS Lumerical FDTD</p>
      <p class="desc">
        Photovoltaic device simulation & optimization for undergraduate thesis.
      </p>
    </div>
  </div>

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Quantum_ESPRESSO_logo.jpg" alt="Quantum ESPRESSO"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:55%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">Quantum ESPRESSO</p>
      <p class="desc">
        Ab-initio material modeling (DFT); Input creation & Pseudopotential selection; 
        Convergence testing; Geometry Optimization; 
        Electronic structure analysis & Density of States (DOS/PDOS);
      </p>
    </div>
  </div>

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/quartus-logo.png" alt="Quartus"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:60%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">Intel Quartus Prime</p>
      <p class="desc">
        FPGA design using Verilog HDL; RTL coding (Finite State Machines, Combinational/Sequential logic); 
        Testbench creation & Simulation (ModelSim-Altera) and Timing Analysis basics.
      </p>
    </div>
  </div>

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/ARM_logo.png" alt="RISC-V"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:60%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">arm (RISC-V)</p>
      <p class="desc">
        Open Instruction Set Architecture; Assembly language programming & Optimization; and Processor pipeline stages (Fetch, Decode, Execute, Mem, WB); 
      </p>
    </div>
  </div>

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/C_Programming_Language.png" alt="C"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:90%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">C Language</p>
      <p class="desc">
        Foundational procedural programming & Algorithm design and Core syntax mastery;
      </p>
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

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/tektronix-logo.png" alt="Oscilloscope"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:90%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">Oscilloscope</p>
      <p class="desc">
        Benchtop signal analysis & debugging; Vertical/Horizontal scaling & Probe compensation; 
        Cursor measurements (Voltage, Time, Frequency);
        and Data export (Screenshots/CSV) for documentation.
      </p>
    </div>
  </div>


<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/Agilent-33120A.jpg" alt="Signal Generator"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:85%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">Signal Generator</p>
      <p class="desc">
        Standard waveform generation (Sine, Square, Triangle, Ramp, Noise); Signal parameter configuration (Amplitude Vpp/Vrms, Frequency, DC Offset); 
        Output impedance management (50Ω / High-Z termination); Duty Cycle adjustment; 
        and Basic Modulation/Sweep setup for circuit stimulus.
      </p>
    </div>
  </div>

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/SLx_01_0224.jpg" alt="Magna-Power SLx"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:60%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">Magna-Power DC Supply</p>
      <p class="desc">
        Programmable High-Voltage DC Power Supply (2.6 kW) for precision output control (0–1250 Vdc / 0–2 Adc); 
      </p>
    </div>
  </div>

<div class="skill-row">
    <div class="skill-logo"><img src="/assets/images/logos/alx_front.jpg" alt="MagnaLOAD ALx"></div>
    <div class="skill-barwrap">
      <div class="skill-bar"><div class="skill-fill" style="width:60%;"></div></div>
    </div>
    <div class="skill-meta">
      <p class="title">MagnaLOAD DC Electronic Load (ALx Series)</p>
      <p class="desc">
        High-power DC Electronic Load (2.5 kW) with high-current sinking capability (Up to 250 Adc / 500 Vdc); 
      </p>
    </div>
  </div>

</div>


</main>

</div>
</div>

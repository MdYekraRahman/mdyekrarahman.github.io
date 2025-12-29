---
title: "Skills"
permalink: /skills/
layout: default
author_profile: false
classes: wide
---

<div class="wrap" markdown="1">

<style>
  /* ====== Layout ====== */
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

  /* ====== Page styling ====== */
  .skills-hero{
    border:1px solid #e5e7eb;
    border-radius:16px;
    padding:18px;
    background:linear-gradient(180deg,rgba(243,244,246,.7),#fff);
    margin-bottom:18px;
  }

  .section-card{
    border:1px solid #e5e7eb;
    border-radius:16px;
    padding:16px;
    background:#fff;
    margin:16px 0;
  }

  .section-title{
    display:flex;
    align-items:center;
    gap:10px;
    margin:0 0 12px 0;
  }

  /* ====== Logo grid ====== */
  .logo-grid{
    display:grid;
    grid-template-columns:repeat(6,1fr);
    gap:12px;
  }
  @media(max-width:1100px){.logo-grid{grid-template-columns:repeat(4,1fr);}}
  @media(max-width:700px){.logo-grid{grid-template-columns:repeat(3,1fr);}}
  @media(max-width:420px){.logo-grid{grid-template-columns:repeat(2,1fr);}}

  .logo-tile{
    border:1px solid #e5e7eb;
    border-radius:14px;
    padding:12px 10px;
    background:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:8px;
    text-align:center;
    min-height:92px;
  }
  .logo-tile img{
    width:42px;height:42px;
    object-fit:contain;
  }
  .logo-tile .label{
    font-size:.85rem;
    color:#374151;
    line-height:1.1;
  }

  /* ====== Chips ====== */
  .chips{display:flex;flex-wrap:wrap;gap:10px;}
  .chip{
    padding:8px 12px;
    border:1px solid #e5e7eb;
    border-radius:999px;
    background:#fff;
    font-size:.92rem;
  }

  /* ====== Skill blocks ====== */
  .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  @media(max-width:900px){.grid-2{grid-template-columns:1fr;}}
</style>

<div class="page-grid">

<!-- LEFT SIDEBAR -->
<aside class="author-card">
  <img class="author-avatar" src="/assets/images/profile.JPG" alt="Md Yekra Rahman">
  <p class="author-name">Md Yekra Rahman</p>
  <p class="author-bio">PhD Student, Mizzou</p>
  <ul class="author-links">
    <li><a href="mailto:mrvpx@missouri.edu"><i class="fas fa-envelope"></i>Email</a></li>
    <li><a href="https://github.com/MdYekraRahman" target="_blank"><i class="fab fa-github"></i>GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/mdyekrarahman/" target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</a></li>
  </ul>
</aside>

<!-- MAIN CONTENT -->
<main markdown="1">

<div class="skills-hero">
  <h2 class="section-title"><i class="fas fa-tools"></i> Technical Skills</h2>
  <p>Experience spanning IC design, power electronics, device modeling, simulation, and embedded systems.</p>
</div>

<!-- SOFTWARE & TOOLS -->
<div class="section-card">
  <h3 class="section-title"><i class="fas fa-layer-group"></i> Software & Tools</h3>

  <div class="logo-grid">

    <div class="logo-tile">
      <img src="/assets/images/logos/Cadence-Logo.jpg" alt="Cadence">
      <div class="label">Cadence<br>Virtuoso</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/LtSpice-logo.jpg" alt="LTspice">
      <div class="label">LTspice</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/MATLAB-Symbol.jpg" alt="MATLAB">
      <div class="label">MATLAB</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/Simulink_Logo.png" alt="Simulink">
      <div class="label">Simulink</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/Altium-Logo.jpg" alt="Altium">
      <div class="label">Altium<br>Designer</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/SILVACO_Logo.jpg" alt="Silvaco">
      <div class="label">Silvaco<br>TCAD</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/Ansys_Lumerical_Logo.jpg" alt="Lumerical">
      <div class="label">Lumerical<br>FDTD</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/Quantum_ESPRESSO_logo.jpg" alt="Quantum ESPRESSO">
      <div class="label">Quantum<br>ESPRESSO</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/quartus-logo.png" alt="Quartus">
      <div class="label">Intel<br>Quartus</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/plecs-logo.png" alt="PLECS">
      <div class="label">PLECS</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/ARM_logo.png" alt="ARM">
      <div class="label">ARM</div>
    </div>

    <div class="logo-tile">
      <img src="/assets/images/logos/C_Programming_Language.png" alt="C">
      <div class="label">C</div>
    </div>

  </div>
</div>

<!-- CORE COMPETENCIES -->
<div class="section-card">
  <h3 class="section-title"><i class="fas fa-microchip"></i> Core Competencies</h3>
  <div class="chips">
    <span class="chip">Analog IC Design (Op-Amps, LDOs, PLLs)</span>
    <span class="chip">gm/ID Methodology</span>
    <span class="chip">Power Converters (Buck / Boost / Half-Bridge)</span>
    <span class="chip">SiC / GaN Devices</span>
    <span class="chip">TCAD → SPICE Modeling</span>
    <span class="chip">PCB Design (4-Layer)</span>
    <span class="chip">EMI-Aware Design</span>
    <span class="chip">Embedded & FPGA Basics</span>
  </div>
</div>

<!-- SKILL DETAILS -->
<div class="section-card">
  <h3 class="section-title"><i class="fas fa-list-check"></i> Skills Breakdown</h3>

  <div class="grid-2">
    <div>
      <h4>Analog & Power IC</h4>
      <ul>
        <li>CMOS analog circuit design</li>
        <li>Biasing, stability, and corner analysis</li>
        <li>Gate drivers and PMIC blocks</li>
      </ul>
    </div>

    <div>
      <h4>Simulation & Modeling</h4>
      <ul>
        <li>Spectre, LTspice workflows</li>
        <li>MATLAB/Python automation</li>
        <li>TCAD device modeling</li>
      </ul>
    </div>

    <div>
      <h4>Power Electronics</h4>
      <ul>
        <li>High-frequency DC–DC converters</li>
        <li>Efficiency and loss optimization</li>
        <li>EMI-conscious layout</li>
      </ul>
    </div>

    <div>
      <h4>Embedded & Digital</h4>
      <ul>
        <li>C programming</li>
        <li>ARM-based workflows</li>
        <li>Quartus / FPGA fundamentals</li>
      </ul>
    </div>
  </div>
</div>

</main>

</div>
</div>

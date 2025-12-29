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
    padding:18px 18px;
    background: linear-gradient(180deg, rgba(243,244,246,.7), rgba(255,255,255,1));
    margin-bottom: 18px;
  }
  .skills-hero h2{margin:0 0 6px 0;}
  .skills-hero p{margin:0;color:#6b7280;}

  .section-card{
    border:1px solid #e5e7eb;
    border-radius:16px;
    padding:16px 16px;
    background:#fff;
    margin: 16px 0;
  }
  .section-title{
    display:flex;
    align-items:center;
    gap:10px;
    margin:0 0 10px 0;
  }
  .section-title i{opacity:.9;}

  /* ====== Logo grid ====== */
  .logo-grid{
    display:grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 12px;
  }
  @media(max-width:1100px){.logo-grid{grid-template-columns: repeat(4, minmax(0, 1fr));}}
  @media(max-width:700px){.logo-grid{grid-template-columns: repeat(3, minmax(0, 1fr));}}
  @media(max-width:420px){.logo-grid{grid-template-columns: repeat(2, minmax(0, 1fr));}}

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
    min-height: 92px;
  }
  .logo-tile img{
    width:42px;height:42px;
    object-fit:contain;
    filter: none;
  }
  .logo-tile .label{
    font-size:.85rem;
    color:#374151;
    line-height:1.1;
  }

  /* ====== Skill chips ====== */
  .chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;}
  .chip{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:8px 10px;
    border:1px solid #e5e7eb;
    border-radius:999px;
    background:#fff;
    font-size:.92rem;
    color:#111827;
  }
  .chip b{font-weight:700;}
  .muted{color:#6b7280;}

  /* ====== Two-column skill sections ====== */
  .grid-2{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:16px;
  }
  @media(max-width:900px){.grid-2{grid-template-columns:1fr;}}
  .skill-block h3{margin:0 0 8px 0;}
  .skill-block ul{margin:0;padding-left:18px;}
  .skill-block li{margin:6px 0;}
</style>

<div class="page-grid">

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

<main markdown="1">

<div class="skills-hero">
  <h2 class="section-title"><i class="fas fa-tools"></i> Technical Skills</h2>
  <p>My workflow spans IC design, power electronics, device modeling, simulation, and PCB implementation.</p>
</div>

<div class="section-card">
  <h3 class="section-title"><i class="fas fa-layer-group"></i> Software & Tools</h3>

  <div class="logo-grid">
    <!-- Put your logo images in /assets/images/logos/ -->
    <div class="logo-tile"><img src="/assets/images/logos/cadence.png" alt="Cadence"><div class="label">Cadence<br>Virtuoso</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/spectre.png" alt="Spectre"><div class="label">Spectre</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/matlab.png" alt="MATLAB"><div class="label">MATLAB</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/python.png" alt="Python"><div class="label">Python</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/ltspice.png" alt="LTspice"><div class="label">LTspice</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/altium.png" alt="Altium"><div class="label">Altium<br>Designer</div></div>

    <!-- Optional extras (add/remove freely) -->
    <div class="logo-tile"><img src="/assets/images/logos/git.png" alt="Git"><div class="label">Git</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/latex.png" alt="LaTeX"><div class="label">LaTeX</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/linux.png" alt="Linux"><div class="label">Linux</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/verilog.png" alt="Verilog-A"><div class="label">Verilog-A</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/silvaco.png" alt="Silvaco"><div class="label">Silvaco<br>(TCAD)</div></div>
    <div class="logo-tile"><img src="/assets/images/logos/office.png" alt="Office"><div class="label">Office /<br>Docs</div></div>
  </div>

  <p class="muted" style="margin-top:12px;">
    Tip: add logo files under <code>/assets/images/logos/</code> with the same names above (or update paths).
  </p>
</div>

<div class="section-card">
  <h3 class="section-title"><i class="fas fa-microchip"></i> Core Competencies</h3>

  <div class="chips">
    <span class="chip"><b>Analog IC</b> Op-amps, LDOs, PLLs</span>
    <span class="chip"><b>Power IC</b> Gate drivers, level shifters</span>
    <span class="chip"><b>gm/ID</b> sizing & optimization</span>
    <span class="chip"><b>Converters</b> Buck / Boost / Half-Bridge</span>
    <span class="chip"><b>WBG</b> SiC / GaN</span>
    <span class="chip"><b>EMI</b> layout-aware design</span>
    <span class="chip"><b>PCB</b> 4-layer design</span>
    <span class="chip"><b>Modeling</b> TCAD → SPICE</span>
  </div>
</div>

<div class="section-card">
  <h3 class="section-title"><i class="fas fa-list-check"></i> Skills Breakdown</h3>

  <div class="grid-2">
    <div class="skill-block">
      <h3>Analog / IC Design</h3>
      <ul>
        <li>CMOS analog design: op-amps, LDOs, PLLs</li>
        <li>gm/ID-based sizing, corner checks</li>
        <li>Cadence Virtuoso, ADE, Spectre</li>
        <li>Layout-aware verification mindset</li>
      </ul>
    </div>

    <div class="skill-block">
      <h3>Power Electronics</h3>
      <ul>
        <li>Buck / Boost / Half-Bridge converter design</li>
        <li>SiC / GaN device understanding</li>
        <li>Switching loss & efficiency tradeoffs</li>
        <li>EMI-aware switching and layout</li>
      </ul>
    </div>

    <div class="skill-block">
      <h3>Simulation & Prototyping</h3>
      <ul>
        <li>LTspice + Spectre simulation workflows</li>
        <li>MATLAB/Python automation for sweeps & plots</li>
        <li>Altium PCB schematic + layout + DRC</li>
        <li>Gerber generation and review</li>
      </ul>
    </div>

    <div class="skill-block">
      <h3>Programming</h3>
      <ul>
        <li>MATLAB & Python for analysis and tooling</li>
        <li>LaTeX for IEEE-style writing</li>
        <li>Git for version control</li>
        <li>Basic Verilog-A / behavioral modeling</li>
      </ul>
    </div>
  </div>
</div>

</main>

</div>
</div>

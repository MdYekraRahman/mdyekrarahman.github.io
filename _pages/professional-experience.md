---
title: "Professional Experience"
permalink: /professional-experience/
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
</style>

<div class="page-grid">

  <!-- LEFT: manual author profile -->
  <aside class="author-card">
    <img class="author-avatar" src="/assets/images/profile.JPG" alt="Md Yekra Rahman">
    <p class="author-name">Md Yekra Rahman</p>
    <p class="author-bio">PhD Student, Mizzou</p>

    <ul class="author-links">
      <li><a href="mailto:mrvpx@missouri.edu"><i class="fas fa-fw fa-envelope"></i><span>Email</span></a></li>
      <li><a href="https://github.com/MdYekraRahman" target="_blank" rel="noopener"><i class="fab fa-fw fa-github"></i><span>GitHub</span></a></li>
      <li><a href="https://www.linkedin.com/in/mdyekrarahman/" target="_blank" rel="noopener"><i class="fab fa-fw fa-linkedin"></i><span>LinkedIn</span></a></li>
    </ul>
  </aside>

  <!-- RIGHT: your existing content -->
  <main markdown="1">

## <i class="fas fa-briefcase"></i> Professional Experience

<div class="edu-timeline">

  <!-- AVDL Lab -->
  <div class="edu-item">
    <div class="edu-logo">
      <img src="/assets/images/avdl-logo.png" alt="Advanced Voltage Devices Laboratory">
    </div>

    <div class="edu-content">
      <h3>Graduate Research Assistant</h3>
      <div class="edu-meta">
        <span>Fall 2025 – Present</span>
        <span>Advanced Voltage Devices Laboratory (AVDL)</span>
      </div>
      <p class="edu-inst">
        University of Missouri–Columbia, USA
      </p>

      <p class="edu-extra">
        Research focused on full design stack from <em>device-level modeling</em> to <em>circuit- and system-level validation</em>.
      </p>
    </div>
  </div>

  <div class="edu-divider"></div>

  <!-- Graduate Teaching Assistant (UT Dallas + Mizzou) -->
  <div class="edu-item">
    <div class="edu-logo">
      <img src="/assets/images/txace-mizzou-logo.png" alt="UT Dallas & University of Missouri">
    </div>

    <div class="edu-content">
      <h3>Graduate Teaching Assistant</h3>

      <div class="edu-meta">
        <span>Fall 2024 – Present</span>
        <span>Electrical Engineering & Computer Science</span>
      </div>

      <p class="edu-inst">
        University of Missouri–Columbia &nbsp;|&nbsp;
        University of Texas at Dallas
      </p>

      <p class="edu-extra">
        Served as a Graduate Teaching Assistant across two institutions, supporting
        <em>undergraduate and graduate-level courses</em>. At the University of Missouri–Columbia, additionally serving as a
        <em>student mentor</em>, guiding undergraduate interns in AVDL.
      </p>
    </div>
  </div>

  <div class="edu-divider"></div>

  <!-- Eastern University -->
  <div class="edu-item">
    <div class="edu-logo">
      <img src="/assets/images/eastern-university-logo.png" alt="Eastern University Bangladesh">
    </div>

    <div class="edu-content">
      <h3>Lecturer</h3>
      <div class="edu-meta">
        <span>Aug 2023 – Aug 2024</span>
        <span>Department of Electrical and Electronic Engineering (EEE)</span>
      </div>
      <p class="edu-inst">
        Eastern University, Dhaka, Bangladesh
      </p>
      <p class="edu-extra"><strong>Courses Instructed:</strong></p>
      <ul class="edu-list">
        <li>Power System Analysis</li>
        <li>Signals and Linear Systems</li>
        <li>Electric and Magnetic Field</li>
        <li>Digital Logic Design (Theory + Lab)</li>
      </ul>
    </div>
  </div>

</div>

  </main>

</div>
</div>

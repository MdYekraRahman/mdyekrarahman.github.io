---
title: "Contact"
permalink: /contact/
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
.author-links a{
  display:inline-flex;
  gap:8px;
  align-items:center;
  text-decoration:none;
}

/* ===== Content cards ===== */
.section-card{
  border:1px solid #e5e7eb;
  border-radius:16px;
  padding:18px;
  background:#fff;
  margin-bottom:18px;
}
.section-title{
  display:flex;
  align-items:center;
  gap:10px;
  margin:0 0 10px 0;
}
.section-title i{opacity:.9;}

.contact-list{
  list-style:none;
  padding:0;
  margin:0;
}
.contact-list li{
  margin:10px 0;
  display:flex;
  gap:10px;
  align-items:flex-start;
}
.contact-list i{
  margin-top:3px;
  color:#2563eb;
}

.muted{color:#6b7280;}
.signature{
  margin-top:20px;
  line-height:1.5;
}
</style>

<div class="page-grid">

<!-- LEFT: Author profile -->
<aside class="author-card">
  <img class="author-avatar" src="/assets/images/profile.JPG" alt="Md Yekra Rahman">
  <p class="author-name">Md Yekra Rahman</p>
  <p class="author-bio">Graduate Teaching & Research Assistant<br>University of Missouri–Columbia</p>

  <ul class="author-links">
    <li>
      <a href="mailto:mrvpx@missouri.edu">
        <i class="fas fa-envelope"></i>Email
      </a>
    </li>
    <li>
      <a href="https://github.com/MdYekraRahman" target="_blank" rel="noopener">
        <i class="fab fa-github"></i>GitHub
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/mdyekrarahman/" target="_blank" rel="noopener">
        <i class="fab fa-linkedin"></i>LinkedIn
      </a>
    </li>
  </ul>
</aside>

<!-- RIGHT: Contact content -->
<main>

<div class="section-card">
  <h2 class="section-title">
    <i class="fas fa-address-card"></i> Get in Touch
  </h2>

  <p class="muted">
    I am always open to academic collaboration, research discussion,
    internship opportunities, and professional networking.
    The best way to reach me is via email.
  </p>
</div>

<div class="section-card">
  <h3 class="section-title">
    <i class="fas fa-envelope-open-text"></i> Contact Information
  </h3>

  <ul class="contact-list">
    <li>
      <i class="fas fa-envelope"></i>
      <div>
        <strong>Email:</strong><br>
        <a href="mailto:mrvpx@missouri.edu">mrvpx@missouri.edu</a>
      </div>
    </li>

    <li>
      <i class="fab fa-github"></i>
      <div>
        <strong>GitHub:</strong><br>
        <a href="https://github.com/MdYekraRahman" target="_blank" rel="noopener">
          github.com/MdYekraRahman
        </a>
      </div>
    </li>

    <li>
      <i class="fab fa-linkedin"></i>
      <div>
        <strong>LinkedIn:</strong><br>
        <a href="https://www.linkedin.com/in/mdyekrarahman/" target="_blank" rel="noopener">
          linkedin.com/in/mdyekrarahman
        </a>
      </div>
    </li>
  </ul>
</div>

<div class="section-card">
  <h3 class="section-title">
    <i class="fas fa-building-columns"></i> Affiliation & Address
  </h3>

  <p>
    <strong>Analog/Mixed Signal VLSI and Devices Laboratory (AVDL)</strong><br>
    Department of Electrical Engineering and Computer Science<br>
    University of Missouri–Columbia
  </p>

  <p class="muted">
    Naka 249<br>
    411 S 6th St<br>
    Columbia, MO 65201<br>
    United States
  </p>
</div>

<div class="signature">
  <p>
    Best regards,<br>
    <strong>Md Yekra Rahman</strong><br>
    Graduate Teaching & Research Assistant<br>
    Analog/Mixed Signal VLSI and Devices Laboratory (AVDL)
  </p>
</div>

</main>

</div>
</div>

---
title: "Contact"
permalink: /contact/
layout: default
author_profile: false
classes: wide
---

<div class="wrap" markdown="1">

<style>
/* =========================
   GET IN TOUCH
========================== */
.section--soft{
  background: linear-gradient(180deg, rgba(243,244,246,.7), rgba(255,255,255,1));
  border-radius: 18px;
  padding: 36px 18px;
  margin-bottom: 32px;
}
.center{text-align:center;}
.big-title{
  font-size:2rem;
  font-weight:800;
  margin-bottom:8px;
}
.underline{
  display:inline-block;
  border-bottom:4px solid #2563eb;
  padding-bottom:6px;
}

/* =========================
   SOCIAL ICON ROW
========================== */
.social-row{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:16px;
  margin-top:24px;
}
.social{
  width:54px;
  height:54px;
  border-radius:50%;
  border:1px solid #e5e7eb;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.4rem;
  color:#111827;
  background:#fff;
  transition:all .25s ease;
}
.social:hover{
  transform:translateY(-3px);
  background:#2563eb;
  color:#fff;
  border-color:#2563eb;
}

/* =========================
   CONTACT GRID
========================== */
.contact-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:28px;
}
@media(max-width:900px){
  .contact-grid{grid-template-columns:1fr;}
}

.card{
  border:1px solid #e5e7eb;
  border-radius:16px;
  padding:20px;
  background:#fff;
}
.card h3{
  margin-top:0;
  display:flex;
  gap:10px;
  align-items:center;
}

/* =========================
   CONTACT FORM
========================== */
.form-group{margin-bottom:14px;}
.form-group label{
  display:block;
  font-weight:600;
  margin-bottom:4px;
}
.form-group input,
.form-group textarea{
  width:100%;
  padding:10px 12px;
  border:1px solid #d1d5db;
  border-radius:10px;
  font-size:0.95rem;
}
.form-group textarea{min-height:120px;}
.form-note{
  font-size:.9rem;
  color:#6b7280;
  margin-top:8px;
}
.btn{
  display:inline-block;
  padding:10px 18px;
  border-radius:999px;
  border:none;
  background:#2563eb;
  color:#fff;
  font-weight:600;
  cursor:pointer;
}
.btn:hover{background:#1e40af;}
</style>

<!-- =========================
     GET IN TOUCH
========================== -->
<section class="section--soft">
  <div class="center">
    <h2 class="big-title underline">GET IN TOUCH</h2>
    <p class="muted">
      Academic collaboration, research discussion, industry opportunities,
      or general inquiries — feel free to reach out.
    </p>

    <div class="social-row">
      <a class="social" href="mailto:mrvpx@missouri.edu" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>

      <a class="social" href="https://github.com/MdYekraRahman"
         target="_blank" rel="noopener" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>

      <a class="social" href="https://www.linkedin.com/in/mdyekrarahman/"
         target="_blank" rel="noopener" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
      </a>

      <a class="social" href="https://www.facebook.com/yekra184/"
         target="_blank" rel="noopener" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>

      <a class="social" href="https://x.com/mdyekrarahman"
         target="_blank" rel="noopener" aria-label="X (Twitter)">
        <i class="fab fa-x-twitter"></i>
      </a>

      <a class="social" href="https://www.reddit.com/user/tadpolemyxini/"
         target="_blank" rel="noopener" aria-label="Reddit">
        <i class="fab fa-reddit-alien"></i>
      </a>
    </div>
  </div>
</section>

<!-- =========================
     CONTACT DETAILS + FORM
========================== -->
<div class="contact-grid">

  <!-- CONTACT INFO -->
  <div class="card">
    <h3><i class="fas fa-building-columns"></i> Affiliation</h3>

    <p>
      <strong>Md Yekra Rahman</strong><br>
      Graduate Teaching & Research Assistant<br>
      Analog/Mixed Signal VLSI and Devices Laboratory (AVDL)
    </p>

    <p class="muted">
      Naka 249<br>
      411 S 6th St<br>
      Columbia, MO 65201<br>
      United States
    </p>

    <h3><i class="fas fa-map-location-dot"></i> Location</h3>

    <!-- Google Map Embed -->
    <iframe
      src="https://www.google.com/maps?q=411%20S%206th%20St,%20Columbia,%20MO%2065201&output=embed"
      width="100%" height="240"
      style="border:0;border-radius:12px;"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

  <!-- CONTACT FORM -->
  <div class="card">
    <h3><i class="fas fa-paper-plane"></i> Send a Message</h3>

    <form onsubmit="event.preventDefault(); alert('Thank you! Please email me directly at mrvpx@missouri.edu');">
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name">
      </div>

      <div class="form-group">
        <label>Your Email</label>
        <input type="email" placeholder="Enter your email">
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea placeholder="Write your message here"></textarea>
      </div>

      <button class="btn" type="submit">Send Message</button>

      <p class="form-note">
        This site uses GitHub Pages (no backend).  
        Clicking send will prompt you to email me directly.
      </p>
    </form>
  </div>

</div>

</div>

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
   SECTION LOOK
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
.muted{color:#6b7280;}

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

/* base button */
.social{
  width:54px;
  height:54px;
  border-radius:50%;
  border:1px solid #e5e7eb;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.4rem;
  background:#fff;
  transition: transform .25s ease, background .25s ease, border-color .25s ease, box-shadow .25s ease;
  opacity: 0;                       /* for scroll animation */
  transform: translateY(10px);      /* for scroll animation */
}

/* FIX: force icon visibility */
.social i{
  color:#111827;
  transition: color .25s ease;
}

/* hover */
.social:hover{
  transform: translateY(-3px);
  background:#2563eb;
  border-color:#2563eb;
  box-shadow: 0 10px 24px rgba(37,99,235,.25);
}
.social:hover i{
  color:#ffffff;
}

/* scroll-in animation activated */
.social.is-visible{
  opacity:1;
  transform: translateY(0);
}

/* optional: platform hover colors (comment out if you want all blue)
.social.github:hover{background:#24292e;border-color:#24292e;}
.social.linkedin:hover{background:#0a66c2;border-color:#0a66c2;}
.social.facebook:hover{background:#1877f2;border-color:#1877f2;}
.social.twitter:hover{background:#111827;border-color:#111827;}
.social.reddit:hover{background:#ff4500;border-color:#ff4500;}
.social.email:hover{background:#2563eb;border-color:#2563eb;}
*/

/* =========================
   GRID LAYOUT
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
.form-group textarea{min-height:140px;}
.form-note{
  font-size:.9rem;
  color:#6b7280;
  margin-top:10px;
}
.btn{
  display:inline-block;
  padding:10px 18px;
  border-radius:999px;
  border:none;
  background:#2563eb;
  color:#fff;
  font-weight:700;
  cursor:pointer;
  transition: background .2s ease, transform .2s ease;
}
.btn:hover{background:#1e40af;}
.btn:active{transform: translateY(1px);}

/* Honeypot: hide from humans, keep for bots */
.hp-field{
  position:absolute !important;
  left:-10000px !important;
  top:auto !important;
  width:1px !important;
  height:1px !important;
  overflow:hidden !important;
}
</style>

<!-- =========================
     GET IN TOUCH
========================== -->
<section class="section--soft">
  <div class="center">
    <h2 class="big-title underline">GET IN TOUCH</h2>
    <p class="muted">
      For academic collaboration, research discussion, industry opportunities, or general inquiries, feel free to reach out.
    </p>

    <div class="social-row">
      <a class="social email" href="mailto:mrvpx@missouri.edu" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>

      <a class="social github" href="https://github.com/MdYekraRahman"
         target="_blank" rel="noopener" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>

      <a class="social linkedin" href="https://www.linkedin.com/in/mdyekrarahman/"
         target="_blank" rel="noopener" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
      </a>

      <a class="social facebook" href="https://www.facebook.com/yekra184/"
         target="_blank" rel="noopener" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>

      <a class="social twitter" href="https://x.com/mdyekrarahman"
         target="_blank" rel="noopener" aria-label="X (Twitter)">
        <i class="fab fa-x-twitter"></i>
      </a>

      <a class="social reddit" href="https://www.reddit.com/user/tadpolemyxini/"
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

  <!-- LEFT: CONTACT INFO -->
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

    <!-- Google Map Embed (optional) -->
    <iframe
      src="https://www.google.com/maps?q=411%20S%206th%20St,%20Columbia,%20MO%2065201&output=embed"
      width="100%" height="240"
      style="border:0;border-radius:12px;"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

  <!-- RIGHT: MAILTO FORM -->
  <div class="card">
    <h3><i class="fas fa-paper-plane"></i> Send a Message</h3>

    <!--
      Spam protection (no reCAPTCHA):
      1) Honeypot field (bots fill it)
      2) Time trap: must wait ~2s before submit
      3) JS required: form uses JS to compose mailto (bots without JS fail)
    -->
    <form id="contactForm">

      <!-- honeypot -->
      <div class="hp-field" aria-hidden="true">
        <label>Company</label>
        <input type="text" id="company" name="company" autocomplete="off" tabindex="-1">
      </div>

      <!-- time trap -->
      <input type="hidden" id="t0" value="">

      <div class="form-group">
        <label>Your Name</label>
        <input id="name" type="text" placeholder="Enter your name" required>
      </div>

      <div class="form-group">
        <label>Your Email</label>
        <input id="email" type="email" placeholder="Enter your email" required>
      </div>

      <div class="form-group">
        <label>Subject</label>
        <input id="subject" type="text" placeholder="e.g., Collaboration / Internship / Question" required>
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea id="message" placeholder="Write your message here" required></textarea>
      </div>

      <button class="btn" type="submit">Send Message</button>

      <p class="form-note">
        This form opens your email app with a pre-filled message (no backend).
      </p>
    </form>
  </div>

</div>

<script>
/* =========================
   Scroll animation for icons
========================== */
(function(){
  const icons = document.querySelectorAll('.social');
  if (!('IntersectionObserver' in window)) {
    icons.forEach(i => i.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        // stagger animation
        icons.forEach((el, idx) => {
          setTimeout(() => el.classList.add('is-visible'), idx * 80);
        });
        io.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const row = document.querySelector('.social-row');
  if (row) io.observe(row);
})();

/* =========================
   Mailto auto-compose + spam protection
========================== */
(function(){
  const form = document.getElementById('contactForm');
  const t0 = document.getElementById('t0');
  t0.value = String(Date.now());

  function encode(s){ return encodeURIComponent(s); }

  form.addEventListener('submit', function(e){
    e.preventDefault();

    // 1) honeypot check
    const hp = document.getElementById('company').value.trim();
    if (hp.length > 0) {
      // silently fail (bots)
      return;
    }

    // 2) time trap (must take at least 2 seconds)
    const start = parseInt(t0.value || '0', 10);
    if (Date.now() - start < 2000) {
      alert('Please wait a moment and try again.');
      return;
    }

    // fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // basic validation
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const to = 'mrvpx@missouri.edu';

    // Compose body with nice structure
    const body =
`Hello Md Yekra Rahman,

${message}

---
Sender Name: ${name}
Sender Email: ${email}
Page: ${window.location.href}
`;

    // mailto link
    const mailto = `mailto:${to}?subject=${encode(subject)}&body=${encode(body)}`;

    // open mail client
    window.location.href = mailto;
  });
})();
</script>

</div>

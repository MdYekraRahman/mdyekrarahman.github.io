---
title: "ECA"
permalink: /eca/
layout: default
author_profile: false
classes: wide
---

<div class="wrap" markdown="1">

<style>
  /* ===== Page header card ===== */
  .eca-hero{
    border:1px solid #e5e7eb;
    border-radius:16px;
    padding:18px 18px;
    background: linear-gradient(180deg, rgba(243,244,246,.7), rgba(255,255,255,1));
    margin-bottom: 18px;
  }
  .eca-hero h2{margin:0 0 6px 0;}
  .eca-hero p{margin:0;color:#6b7280;}

  /* ===== Section card ===== */
  .eca-card{
    border:1px solid #e5e7eb;
    border-radius:16px;
    padding:16px 16px;
    background:#fff;
    margin: 16px 0;
  }
  .eca-title{
    display:flex;
    align-items:center;
    gap:10px;
    margin:0 0 10px 0;
  }
  .eca-title i{opacity:.9;}

  /* ===== Gallery grid ===== */
  .gallery{
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap:12px;
  }
  @media(max-width:1100px){ .gallery{grid-template-columns: repeat(3, minmax(0, 1fr));} }
  @media(max-width:760px){  .gallery{grid-template-columns: repeat(2, minmax(0, 1fr));} }
  @media(max-width:420px){  .gallery{grid-template-columns: 1fr;} }

  .thumb{
    border:1px solid #e5e7eb;
    border-radius:14px;
    overflow:hidden;
    background:#fff;
    box-shadow: 0 10px 25px rgba(0,0,0,.06);
  }
  .thumb img{
    width:100%;
    height:210px;
    object-fit:cover;
    display:block;
    transition: transform .25s ease;
  }
  .thumb:hover img{ transform: scale(1.03); }

  .muted{ color:#6b7280; }

  /* ===== Lightbox ===== */
  .lb{
    position:fixed; inset:0;
    background:rgba(0,0,0,.85);
    display:none;
    align-items:center;
    justify-content:center;
    z-index:9999;
    padding:24px;
  }
  .lb.is-open{ display:flex; }

  .lb__img{
    max-width:min(1200px, 94vw);
    max-height:88vh;
    border-radius:14px;
    box-shadow:0 18px 50px rgba(0,0,0,.45);
    background:#111;
    object-fit:contain;
  }

  .lb__btn{
    position:absolute;
    top:18px;
    right:18px;
    width:42px;height:42px;
    border:0;
    border-radius:999px;
    background:rgba(255,255,255,.12);
    color:#fff;
    font-size:22px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .lb__btn:hover{ background:rgba(255,255,255,.2); }

  .lb__nav{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:46px;height:46px;
    border:0;
    border-radius:999px;
    background:rgba(255,255,255,.12);
    color:#fff;
    font-size:28px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .lb__nav:hover{ background:rgba(255,255,255,.2); }
  .lb__prev{ left:18px; }
  .lb__next{ right:18px; }

  @media (max-width:700px){
    .lb{ padding:14px; }
    .lb__prev{ left:10px; }
    .lb__next{ right:10px; }
  }
</style>

<div class="eca-hero">
  <h2 class="eca-title"><i class="fas fa-people-group"></i> Extracurricular Activities</h2>
  <p>Community service, volunteering, and sports activities beyond academics.</p>
</div>

<div class="eca-card" markdown="1">
  <h3 class="eca-title"><i class="fas fa-hand-holding-heart"></i> BADHAN — Voluntary Blood Donation Organization (Bangladesh)</h3>
  <p class="muted" style="margin-top:0;">
    I have been involved with <strong>BADHAN</strong>, one of the most prominent blood donation organizations in Bangladesh, and actively participated in events and volunteer activities.
  </p>

  <!-- ====== BADHAN Gallery ======
       Put your images inside: /assets/images/eca/badhan/
       Example filenames below. Replace/extend with your real filenames.
  -->
  <div class="gallery">
    <a class="thumb" href="/assets/images/eca/badhan/1.jpg" data-lightbox="eca"><img src="/assets/images/eca/badhan/1.jpg" alt="BADHAN activity 1"></a>
    <a class="thumb" href="/assets/images/eca/badhan/2.jpg" data-lightbox="eca"><img src="/assets/images/eca/badhan/2.jpg" alt="BADHAN activity 2"></a>
    <a class="thumb" href="/assets/images/eca/badhan/3.jpg" data-lightbox="eca"><img src="/assets/images/eca/badhan/3.jpg" alt="BADHAN activity 3"></a>
    <a class="thumb" href="/assets/images/eca/badhan/4.jpg" data-lightbox="eca"><img src="/assets/images/eca/badhan/4.jpg" alt="BADHAN activity 4"></a>
  </div>


  <p class="muted" style="margin:12px 0 0 0;">
    Add more photos by copying the same <code>&lt;a class="thumb" ...&gt;</code> line and updating the filename.
  </p>
</div>

<div class="eca-card" markdown="1">
  <h3 class="eca-title"><i class="fas fa-futbol"></i> Inter-Hall Football Championship</h3>
  <p class="muted" style="margin-top:0;">
    I have participated in inter-hall football championship activities and team sports events.
  </p>

  <!-- ====== Football Gallery ======
       Put your images inside: /assets/images/eca/football/
  -->
  <div class="gallery">
    <a class="thumb" href="/assets/images/eca/football/1.jpg" data-lightbox="eca"><img src="/assets/images/eca/football/1.jpg" alt="Inter-hall football 1"></a>
    <a class="thumb" href="/assets/images/eca/football/2.jpg" data-lightbox="eca"><img src="/assets/images/eca/football/2.jpg" alt="Inter-hall football 2"></a>
    <a class="thumb" href="/assets/images/eca/football/3.jpg" data-lightbox="eca"><img src="/assets/images/eca/football/3.jpg" alt="Inter-hall football 3"></a>
    <a class="thumb" href="/assets/images/eca/football/4.jpg" data-lightbox="eca"><img src="/assets/images/eca/football/4.jpg" alt="Inter-hall football 4"></a>
  </div>

  <p class="muted" style="margin:12px 0 0 0;">
    If you have fewer photos, delete extra tiles. If you have more, add more tiles.
  </p>
</div>

<div class="eca-card" markdown="1">
  <h3 class="eca-title"><i class="fas fa-dumbbell"></i> Sports & Other Activities</h3>
  <p class="muted" style="margin-top:0;">
    I also stay engaged with sports and other extracurricular activities. I will add more items and photos here over time.
  </p>

  <!-- ====== Others Gallery ======
       Put your images inside: /assets/images/eca/others/
  -->
  <div class="gallery">
    <a class="thumb" href="/assets/images/eca/others/1.jpg" data-lightbox="eca"><img src="/assets/images/eca/others/1.jpg" alt="Activity 1"></a>
    <a class="thumb" href="/assets/images/eca/others/2.jpg" data-lightbox="eca"><img src="/assets/images/eca/others/2.jpg" alt="Activity 2"></a>
    <a class="thumb" href="/assets/images/eca/others/3.jpg" data-lightbox="eca"><img src="/assets/images/eca/others/3.jpg" alt="Activity 3"></a>
    <a class="thumb" href="/assets/images/eca/others/4.jpg" data-lightbox="eca"><img src="/assets/images/eca/others/4.jpg" alt="Activity 4"></a>
  </div>
</div>

<!-- Lightbox overlay (one per page) -->
<div class="lb" id="lightbox" aria-hidden="true">
  <button class="lb__btn" type="button" id="lbClose" aria-label="Close">✕</button>
  <button class="lb__nav lb__prev" type="button" id="lbPrev" aria-label="Previous">‹</button>
  <img class="lb__img" id="lbImg" alt="Expanded image">
  <button class="lb__nav lb__next" type="button" id="lbNext" aria-label="Next">›</button>
</div>

<script>
(function(){
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const btnClose = document.getElementById('lbClose');
  const btnPrev = document.getElementById('lbPrev');
  const btnNext = document.getElementById('lbNext');

  const links = Array.from(document.querySelectorAll('a[data-lightbox="eca"]'));
  let idx = -1;

  function openAt(i){
    if(!links.length) return;
    idx = (i + links.length) % links.length;
    const href = links[idx].getAttribute('href');
    lbImg.src = href;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden','true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }
  function next(){ openAt(idx + 1); }
  function prev(){ openAt(idx - 1); }

  links.forEach((a, i) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openAt(i);
    });
  });

  lb.addEventListener('click', (e) => {
    if(e.target === lb) close();
  });

  btnClose.addEventListener('click', close);
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);

  document.addEventListener('keydown', (e) => {
    if(!lb.classList.contains('is-open')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowRight') next();
    if(e.key === 'ArrowLeft') prev();
  });
})();
</script>

</div>

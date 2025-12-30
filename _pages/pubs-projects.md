---
title: "Publications / Projects"
permalink: /pubs-projects/
layout: default
author_profile: false
classes: wide
---

<div class="wrap" markdown="0">

  <h1>Operational Amplifier Design (IBM 130 nm)</h1>

  <p>
    Two-stage, Miller-compensated CMOS operational amplifier designed using
    gm/ID methodology in IBM 130 nm CMOS technology. The design was validated
    for gain, GBW, phase margin, slew rate, and saturation compliance.
  </p>

  <!-- =========================
       PROJECT MEDIA (CAROUSEL)
  ========================== -->
  <div class="proj-media">
    <div class="carousel" data-carousel>
      <div class="carousel-track" data-track>
        <img class="carousel-slide is-active"
             src="/assets/images/projects/opamp/Main_1.png"
             alt="Op-amp main schematic">

        <img class="carousel-slide"
             src="/assets/images/projects/opamp/Topology.png"
             alt="Op-amp topology">

        <img class="carousel-slide"
             src="/assets/images/projects/opamp/Small_Signal.png"
             alt="Op-amp small signal model">

        <img class="carousel-slide"
             src="/assets/images/projects/opamp/M8-Sizing.png"
             alt="M8 sizing">

        <img class="carousel-slide"
             src="/assets/images/projects/opamp/Sizing-of-M1-4-and-M8.png"
             alt="Sizing of M1–M4 and M8">

        <img class="carousel-slide"
             src="/assets/images/projects/opamp/M12_M34_Sizing.png"
             alt="Sizing of M12 and M3/M4">

        <img class="carousel-slide"
             src="/assets/images/projects/opamp/Final_Circuit.png"
             alt="Final op-amp circuit">
      </div>

      <button class="carousel-btn prev" data-prev aria-label="Previous">‹</button>
      <button class="carousel-btn next" data-next aria-label="Next">›</button>
      <div class="carousel-dots" data-dots></div>
    </div>
  </div>

</div>

<!-- =========================
     PAGE-LOCAL CSS
========================== -->
<style>
  .proj-media{ margin: 22px 0 30px; }

  .carousel{
    position: relative;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    background: #ffffff;
  }

  .carousel-track{
    display: flex;
    width: 100%;
    will-change: transform;
    transition: transform 280ms ease;
    touch-action: pan-y;
  }

  .carousel-slide{
    flex: 0 0 100%;
    width: 100%;
    height: 380px;
    object-fit: contain;
    background: #f3f4f6;
    user-select: none;
    -webkit-user-drag: none;
  }

  @media (max-width: 900px){
    .carousel-slide{ height: 300px; }
  }

  /* Nav buttons */
  .carousel-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid rgba(0,0,0,.08);
    background: rgba(255,255,255,.95);
    box-shadow: 0 6px 18px rgba(0,0,0,.12);
    cursor: pointer;
    display: grid;
    place-items: center;
    font-size: 26px;
    z-index: 5;
  }

  .carousel-btn.prev{ left: 12px; }
  .carousel-btn.next{ right: 12px; }

  /* Dots */
  .carousel-dots{
    position: absolute;
    left: 0; right: 0;
    bottom: 12px;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 5;
  }

  .carousel-dot{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(0,0,0,.25);
    border: none;
    cursor: pointer;
  }

  .carousel-dot.is-active{
    background: rgba(0,0,0,.75);
  }

  @media (max-width: 520px){
    .carousel-btn{ display: none; }
  }
</style>

<!-- =========================
     PAGE-LOCAL JS (NO DEPENDENCY)
========================== -->
<script>
(function(){
  function initCarousel(root){
    const track = root.querySelector("[data-track]");
    const slides = [...track.children];
    const prev = root.querySelector("[data-prev]");
    const next = root.querySelector("[data-next]");
    const dotsWrap = root.querySelector("[data-dots]");

    let index = 0;

    function buildDots(){
      dotsWrap.innerHTML = "";
      slides.forEach((_, i)=>{
        const d = document.createElement("button");
        d.className = "carousel-dot" + (i === 0 ? " is-active" : "");
        d.addEventListener("click", ()=>go(i));
        dotsWrap.appendChild(d);
      });
    }

    function update(){
      track.style.transform = `translateX(${-index * 100}%)`;
      slides.forEach((s,i)=>s.classList.toggle("is-active", i===index));
      [...dotsWrap.children].forEach((d,i)=>d.classList.toggle("is-active", i===index));
    }

    function go(i){
      index = (i + slides.length) % slides.length;
      update();
    }

    prev.onclick = ()=>go(index - 1);
    next.onclick = ()=>go(index + 1);

    /* Touch / swipe */
    let startX = 0, dx = 0, dragging = false;

    track.addEventListener("touchstart", e=>{
      startX = e.touches[0].clientX;
      dragging = true;
    }, {passive:true});

    track.addEventListener("touchmove", e=>{
      if(!dragging) return;
      dx = e.touches[0].clientX - startX;
    }, {passive:true});

    track.addEventListener("touchend", ()=>{
      dragging = false;
      if(dx > 80) go(index - 1);
      else if(dx < -80) go(index + 1);
      dx = 0;
    });

    buildDots();
    update();
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll("[data-carousel]").forEach(initCarousel);
  });
})();
</script>

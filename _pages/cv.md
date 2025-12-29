---
title: "Curriculum Vitae"
permalink: /cv/
layout: default
author_profile: false
---

<div class="wrap">

## Curriculum Vitae

<div style="text-align:center; margin-bottom: 1rem;">
  <a class="btn btn--primary"
     href="/assets/pdf/Md_Yekra_Rahman_Resume_Single_Page_NA.pdf"
     download>
     Download CV (PDF)
  </a>
</div>

<style>
  .pdfx-shell{
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
  }
  .pdfx-toolbar{
    display:flex; flex-wrap:wrap; gap:10px;
    align-items:center; justify-content:space-between;
    padding:10px 12px;
    border-bottom:1px solid #e5e7eb;
    background:#fafafa;
  }
  .pdfx-left,.pdfx-right{display:flex; gap:8px; align-items:center; flex-wrap:wrap;}
  .pdfx-btn{
    border:1px solid #e5e7eb; background:#fff;
    border-radius:10px; padding:6px 10px; cursor:pointer; font-weight:700;
  }
  .pdfx-input{width:74px; border:1px solid #e5e7eb; border-radius:10px; padding:6px 10px;}
  .pdfx-viewer{
    height:min(78vh, 920px);
    overflow:auto;
    padding:14px;
    background:#f6f7fb;
  }
  .pdfx-page{display:flex; justify-content:center; margin:0 0 14px 0;}
  .pdfx-page canvas{
    display:block; background:#fff; border-radius:10px;
    box-shadow:0 10px 24px rgba(0,0,0,0.08);
    max-width:100%; height:auto;
  }
  .pdfx-note{color:#6b7280; font-size:0.92rem; margin-top:8px; text-align:center;}
  .pdfx-error{
    padding:14px;
    color:#b91c1c;
    background:#fff5f5;
    border:1px solid #fecaca;
    border-radius:12px;
    margin: 12px;
    font-weight:700;
  }
</style>

<div class="pdfx-shell">
  <div class="pdfx-toolbar">
    <div class="pdfx-left">
      <button class="pdfx-btn" id="pdfx-zoomout" type="button">−</button>
      <button class="pdfx-btn" id="pdfx-zoomin" type="button">+</button>
      <span style="font-weight:800;">Zoom:</span>
      <span id="pdfx-zoomlabel" style="min-width:52px; display:inline-block;">100%</span>
    </div>
    <div class="pdfx-right">
      <span style="font-weight:800;">Page</span>
      <input class="pdfx-input" id="pdfx-page" type="number" min="1" value="1">
      <span id="pdfx-total" style="font-weight:800;">/ ?</span>
      <button class="pdfx-btn" id="pdfx-goto" type="button">Go</button>
      <a class="pdfx-btn" href="/assets/pdf/Md_Yekra_Rahman_Resume_Single_Page_NA.pdf" download>Download</a>
    </div>
  </div>

  <div class="pdfx-viewer" id="pdfx-viewer">
    <div style="text-align:center; padding: 18px; color:#6b7280;">
      Loading PDF…
    </div>
  </div>
</div>

<p class="pdfx-note">
  Tip: scroll inside the viewer to move through pages. Zoom controls adjust all pages.
</p>

<script>
(function(){
  // ✅ IMPORTANT: this must be the correct URL on your deployed site
  const pdfUrl = "/assets/pdf/Md_Yekra_Rahman_Resume_Single_Page_NA.pdf";

  const viewer = document.getElementById("pdfx-viewer");
  const zoomLabel = document.getElementById("pdfx-zoomlabel");
  const pageInput = document.getElementById("pdfx-page");
  const totalLabel = document.getElementById("pdfx-total");

  const btnZoomIn = document.getElementById("pdfx-zoomin");
  const btnZoomOut = document.getElementById("pdfx-zoomout");
  const btnGoto = document.getElementById("pdfx-goto");

  let pdfDoc = null;
  let scale = 1.1;
  let pageWraps = [];
  let rendering = false;

  function showError(msg){
    viewer.innerHTML = '<div class="pdfx-error">' + msg + '</div>';
  }

  function setZoomLabel(){
    zoomLabel.textContent = Math.round(scale * 100) + "%";
  }

  function clearViewer(){
    viewer.innerHTML = "";
    pageWraps = [];
  }

  function scrollToPage(n){
    const idx = n - 1;
    if (pageWraps[idx]){
      pageWraps[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function renderAllPages(){
    if (!pdfDoc || rendering) return;
    rendering = true;

    clearViewer();

    const numPages = pdfDoc.numPages;
    totalLabel.textContent = "/ " + numPages;

    // Auto-detect orientation from first page (set max width)
    const first = await pdfDoc.getPage(1);
    const vp1 = first.getViewport({ scale: 1 });
    const isLandscape = vp1.width > vp1.height;
    const shell = viewer.closest(".pdfx-shell");
    shell.style.maxWidth = isLandscape ? "1200px" : "980px";

    for (let p = 1; p <= numPages; p++){
      const page = await pdfDoc.getPage(p);
      const viewport = page.getViewport({ scale });

      const wrap = document.createElement("div");
      wrap.className = "pdfx-page";

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { alpha: false });

      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);

      wrap.appendChild(canvas);
      viewer.appendChild(wrap);
      pageWraps.push(wrap);

      await page.render({ canvasContext: ctx, viewport }).promise;
    }

    setZoomLabel();
    rendering = false;
  }

  async function loadPdfJsFrom(url){
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function ensurePdfIsReachable(){
    // Check PDF path first (most common failure on GitHub Pages)
    try{
      const r = await fetch(pdfUrl, { method: "GET" });
      if (!r.ok){
        throw new Error("HTTP " + r.status);
      }
    } catch(e){
      throw new Error("PDF not reachable at: " + pdfUrl +
        ". If your site is in a subfolder, the path may need the baseurl prefix.");
    }
  }

  async function main(){
    // 1) Verify PDF path works
    try{
      await ensurePdfIsReachable();
    } catch(e){
      showError(e.message);
      return;
    }

    // 2) Load PDF.js (try cdnjs then jsDelivr)
    try{
      await loadPdfJsFrom("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.js");
    } catch(e1){
      try{
        await loadPdfJsFrom("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.js");
      } catch(e2){
        showError("PDF.js failed to load from CDN (blocked by network/CSP). Try allowing cdnjs/jsdelivr or host pdfjs locally.");
        return;
      }
    }

    // 3) Configure worker, but fall back to worker-less if needed
    try{
      if (window.pdfjsLib && window.pdfjsLib.GlobalWorkerOptions){
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.js";
      }
    } catch(e){
      // ignore
    }

    // 4) Load the PDF with worker-less fallback if worker fails
    try{
      const loadingTask = window.pdfjsLib.getDocument({
        url: pdfUrl,
        // ✅ Worker-less fallback reduces “stuck loading” cases on some hosts
        disableWorker: true
      });

      pdfDoc = await loadingTask.promise;

      pageInput.max = pdfDoc.numPages;
      await renderAllPages();

    } catch(e){
      showError("PDF.js loaded, but the PDF failed to render. Error: " + (e && e.message ? e.message : e));
      console.error(e);
      return;
    }

    // Controls
    btnZoomIn.addEventListener("click", async () => {
      scale = Math.min(2.5, scale + 0.15);
      await renderAllPages();
    });

    btnZoomOut.addEventListener("click", async () => {
      scale = Math.max(0.6, scale - 0.15);
      await renderAllPages();
    });

    btnGoto.addEventListener("click", () => {
      if (!pdfDoc) return;
      const n = Math.max(1, Math.min(pdfDoc.numPages, parseInt(pageInput.value || "1", 10)));
      scrollToPage(n);
    });

    viewer.addEventListener("scroll", () => {
      if (!pageWraps.length) return;
      let closest = 1;
      let best = Infinity;
      const top = viewer.getBoundingClientRect().top;

      for (let i = 0; i < pageWraps.length; i++){
        const r = pageWraps[i].getBoundingClientRect();
        const d = Math.abs(r.top - top);
        if (d < best){
          best = d;
          closest = i + 1;
        }
      }
      pageInput.value = closest;
    }, { passive: true });
  }

  main();
})();
</script>

</div>

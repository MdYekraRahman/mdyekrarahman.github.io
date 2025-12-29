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

<!-- =========================
     Inline CSS (only for this page)
========================== -->
<style>
  .pdfx-shell{
    width: 100%;
    max-width: 980px;          /* looks like a paper viewer, not full screen */
    margin: 0 auto;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
  }

  .pdfx-toolbar{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-bottom: 1px solid #e5e7eb;
    background: #fafafa;
  }

  .pdfx-left, .pdfx-right{
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }

  .pdfx-btn{
    border: 1px solid #e5e7eb;
    background: #fff;
    border-radius: 10px;
    padding: 6px 10px;
    cursor: pointer;
    font-weight: 700;
  }
  .pdfx-btn:active{ transform: translateY(1px); }

  .pdfx-input{
    width: 74px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 6px 10px;
  }

  /* Viewer height is "page-like" and scrolls for more pages */
  .pdfx-viewer{
    height: min(78vh, 920px);
    overflow: auto;
    padding: 14px;
    background: #f6f7fb;
  }

  /* Each rendered page canvas looks like a page */
  .pdfx-page{
    display: flex;
    justify-content: center;
    margin: 0 0 14px 0;
  }
  .pdfx-page canvas{
    display: block;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 24px rgba(0,0,0,0.08);
    max-width: 100%;
    height: auto;
  }

  .pdfx-note{
    color: #6b7280;
    font-size: 0.92rem;
    margin-top: 8px;
    text-align: center;
  }
</style>

<!-- =========================
     Viewer UI
========================== -->
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
      <a class="pdfx-btn" id="pdfx-download" href="/assets/pdf/Md_Yekra_Rahman_Resume_Single_Page_NA.pdf" download>Download</a>
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

<!-- =========================
     PDF.js (auto-detect orientation using page 1)
     All JS stays in this MD file
========================== -->
<script>
  (function(){
    const pdfUrl = "/assets/pdf/Md_Yekra_Rahman_Resume_Single_Page_NA.pdf";

    // Load PDF.js from CDN (no CSS file changes needed)
    const pdfjsScript = document.createElement("script");
    pdfjsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.js";
    pdfjsScript.onload = init;
    document.head.appendChild(pdfjsScript);

    function init(){
      // Set worker
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.js";

      const viewer = document.getElementById("pdfx-viewer");
      const zoomLabel = document.getElementById("pdfx-zoomlabel");
      const pageInput = document.getElementById("pdfx-page");
      const totalLabel = document.getElementById("pdfx-total");

      const btnZoomIn = document.getElementById("pdfx-zoomin");
      const btnZoomOut = document.getElementById("pdfx-zoomout");
      const btnGoto = document.getElementById("pdfx-goto");

      let pdfDoc = null;
      let scale = 1.15;     // base scale; user controls zoom
      let pageCanvases = [];
      let rendering = false;

      function setZoomLabel(){
        zoomLabel.textContent = Math.round(scale * 100) + "%";
      }

      function clearViewer(){
        viewer.innerHTML = "";
        pageCanvases = [];
      }

      function scrollToPage(n){
        const idx = n - 1;
        if (pageCanvases[idx]){
          pageCanvases[idx].scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      async function renderAllPages(){
        if (!pdfDoc || rendering) return;
        rendering = true;

        clearViewer();

        const numPages = pdfDoc.numPages;
        totalLabel.textContent = "/ " + numPages;

        // ---- Auto-detect orientation from page 1 ----
        const first = await pdfDoc.getPage(1);
        const vp1 = first.getViewport({ scale: 1 });
        const isLandscape = vp1.width > vp1.height;

        // You asked: "viewer should open like A4 portrait vs landscape"
        // Here we set container max-width depending on orientation
        const shell = viewer.closest(".pdfx-shell");
        shell.style.maxWidth = isLandscape ? "1200px" : "980px";

        // ---- Render all pages into scrollable viewer ----
        for (let p = 1; p <= numPages; p++){
          const page = await pdfDoc.getPage(p);
          const viewport = page.getViewport({ scale });

          const pageWrap = document.createElement("div");
          pageWrap.className = "pdfx-page";

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d", { alpha: false });

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);

          pageWrap.appendChild(canvas);
          viewer.appendChild(pageWrap);

          pageCanvases.push(pageWrap);

          await page.render({ canvasContext: ctx, viewport }).promise;
        }

        setZoomLabel();
        rendering = false;
      }

      // Load PDF
      pdfjsLib.getDocument({ url: pdfUrl }).promise
        .then(async (doc) => {
          pdfDoc = doc;
          pageInput.max = pdfDoc.numPages;
          await renderAllPages();
        })
        .catch((err) => {
          viewer.innerHTML = "<div style='padding:16px;color:#b91c1c;'>Failed to load PDF. " +
                             "Check the file path and that the PDF exists.</div>";
          console.error(err);
        });

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
        const n = Math.max(1, Math.min(pdfDoc.numPages, parseInt(pageInput.value || "1", 10)));
        scrollToPage(n);
      });

      // Update page number while scrolling (best-effort)
      viewer.addEventListener("scroll", () => {
        if (!pageCanvases.length) return;
        let closest = 1;
        let best = Infinity;
        const top = viewer.getBoundingClientRect().top;

        for (let i = 0; i < pageCanvases.length; i++){
          const r = pageCanvases[i].getBoundingClientRect();
          const d = Math.abs(r.top - top);
          if (d < best){
            best = d;
            closest = i + 1;
          }
        }
        pageInput.value = closest;
      }, { passive: true });
    }
  })();
</script>

</div>

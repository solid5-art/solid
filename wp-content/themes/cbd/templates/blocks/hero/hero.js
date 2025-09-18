function getWebGLContext() {
  let e = document.createElement("canvas");
  return e.getContext("webgl") || e.getContext("experimental-webgl");
}
function getGPUInfo(e) {
  if (!e) return { vendor: "Unknown", renderer: "Unknown" };
  let t = e.getExtension("WEBGL_debug_renderer_info");
  return t
    ? {
        vendor: e.getParameter(t.UNMASKED_VENDOR_WEBGL),
        renderer: e.getParameter(t.UNMASKED_RENDERER_WEBGL),
      }
    : { vendor: "Unavailable", renderer: "Unavailable" };
}
function isHighEndGPU(e) {
  return [
    "RTX",
    "Titan",
    "Quadro",
    "GeForce GTX",
    "GeForce RTX",
    "Radeon RX",
    "Radeon Pro",
    "M1",
    "M2",
    "A100",
    "Tesla",
    "Apple",
  ].some((t) => e.includes(t));
}
function runPerformanceTest(e, t) {
  let n = [],
    o = performance.now();
  !(function r() {
    let i = performance.now();
    n.push(i),
      (n = n.filter((e) => i - e < 1e3)),
      i - o > 2e3
        ? (t(n.length), 0)
        : (e.clear(e.COLOR_BUFFER_BIT), requestAnimationFrame(r));
  })();
}
function loadScript(e) {
  let t = document.createElement("script");
  (t.src = e), document.body.appendChild(t);
}
function setSession(e) {
  sessionStorage.setItem("gpuPerformance", e);
}
function getSession() {
  return sessionStorage.getItem("gpuPerformance");
}
function checkGraphicsCard() {
  let e = getSession();
  if (e) {
    console.log(`Session detected: ${e}. Loading appropriate script...`),
      "high" === e &&
        loadScript("/wp-content/themes/cbd/templates/blocks/hero/fluid.js");
    return;
  }
  let t = getWebGLContext();
  if (!t) {
    console.log("WebGL is not supported. No script will be loaded.");
    return;
  }
  let { vendor: n, renderer: o } = getGPUInfo(t);
  if ((console.log("Detected GPU:", n, o), isHighEndGPU(o)))
    return (
      console.log(`High-End GPU Detected (${o}). Loading fluid.js...`),
      setSession("high"),
      void loadScript("/wp-content/themes/cbd/templates/blocks/hero/fluid.js")
    );
  runPerformanceTest(t, (e) => {
    e > 45
      ? (console.log(
          `Good performance detected (FPS: ${e}). Loading fluid.js...`,
        ),
        setSession("high"),
        loadScript("/wp-content/themes/cbd/templates/blocks/hero/fluid.js"))
      : (console.log(
          `Low-end graphics detected (FPS: ${e}). No script will be loaded.`,
        ),
        setSession("low"));
  });
}
if (window.innerWidth > 480) {
  checkGraphicsCard();
}

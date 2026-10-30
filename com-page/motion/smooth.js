/* Packing Panic · smooth wheel scrolling (Lenis 1.3.4, native scroll underneath, so the sticky
   header and anchors keep working). Off with prefers-reduced-motion. Load after lenis.min.js. */
(function () {
  if (!window.Lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var lenis = new window.Lenis({ autoRaf: true, anchors: true, lerp: 0.12 });
  var drawer = document.getElementById('pp-menu');
  if (drawer) new MutationObserver(function () { if (drawer.hidden) lenis.start(); else lenis.stop(); }).observe(drawer, { attributes: true, attributeFilter: ['hidden'] });
})();

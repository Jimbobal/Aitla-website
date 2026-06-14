/* AITLA — small bits of progressive enhancement (no dependencies) */
(function () {
  "use strict";

  // --- Mobile navigation toggle -------------------------------------------
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    var closeNav = function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu after tapping a link.
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });

    // Close on Escape.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  // --- Auto-updating footer year ------------------------------------------
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

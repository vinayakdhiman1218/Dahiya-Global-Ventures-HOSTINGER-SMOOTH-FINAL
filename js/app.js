
(() => {
  "use strict";

  // Nothing in the site depends on this script for rendering.
  // If JavaScript is unavailable, every page and every link still works.

  const reveal = () => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(el => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    items.forEach(el => observer.observe(el));
  };

  const mobileMenu = () => {
    const button = document.querySelector(".menu");
    const nav = document.querySelector(".nav nav");
    if (!button || !nav) return;

    button.addEventListener("click", () => {
      const open = nav.classList.toggle("mobile-open");
      button.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("mobile-open"));
    });
  };

  try {
    reveal();
    mobileMenu();
  } catch (_) {
    // Never let enhancement errors break the website.
  }
})();

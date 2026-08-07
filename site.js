"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initializeMobileNavigation();
  initializeRevealAnimations();
});

/**
 * Opens and closes the mobile navigation.
 */
function initializeMobileNavigation() {
  const button = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");

  if (!button || !navigation) {
    return;
  }

  button.addEventListener("click", () => {
    const currentlyOpen = navigation.classList.toggle("is-open");

    button.setAttribute(
      "aria-expanded",
      currentlyOpen ? "true" : "false"
    );

    const label = button.querySelector(".menu-toggle-label");

    if (label) {
      label.textContent = currentlyOpen ? "Close" : "Menu";
    }
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");

      const label = button.querySelector(".menu-toggle-label");

      if (label) {
        label.textContent = "Menu";
      }
    });
  });
}

/**
 * Adds gentle reveal animations as content enters the viewport.
 * Content remains visible when IntersectionObserver is unavailable.
 */
function initializeRevealAnimations() {
  const items = document.querySelectorAll(".reveal");

  if (!items.length) {
    return;
  }

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    items.forEach((item) => {
      item.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  items.forEach((item) => {
    observer.observe(item);
  });
}

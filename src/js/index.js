import "../scss/home.scss";
import gsap from "gsap";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    overlayAnimation();
  });
})();

const overlayAnimation = () => {
  const overlayTL = gsap.timeline();
  overlayTL
    .from("[data-overlay-logo]", {
      duration: 0.2,
      ease: "power4.in",
      opacity: 0,
    })
    .to("[data-overlay-logo]", {
      duration: 0.6,
      delay: 0.6,
      ease: "power4.in",
      opacity: 0,
    })
    .to("[data-overlay-line]", {
      duration: 0.8,
      ease: "expo.in",
      y: 0,
    })
    .to("[data-overlay-line]", {
      duration: 0.5,
      opacity: 0,
    })
    .to("[data-overlay-left]", {
      duration: 1,
      delay: -0.5,
      ease: "expo.in",
      x: "-50vw",
    })
    .to("[data-overlay-right]", {
      duration: 1,
      delay: -1,
      ease: "expo.in",
      x: "50vw",
    })
    .to("[data-overlay]", {
      duration: 0,
      css: { display: "none" },
      onComplete: () => {
        introAnimation();
      },
    });
};

const introAnimation = () => {
  const introTL = gsap.timeline();
  introTL
    .to("[data-intro-img]", {
      duration: 1.4,
      ease: "power4.out",
      x: 0,
      opacity: 1,
    })
    .to("[data-header-navbar]", {
      duration: 1,
      delay: -1,
      ease: "power4.out",
      opacity: 1,
      y: 0,
    })
    .to("[data-intro-text-line]", {
      duration: 0.5,
      delay: -1,
      y: 0,
      autoAlpha: 1,
      stagger: { amount: 0.5 },
    });
};

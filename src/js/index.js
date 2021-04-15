import "../scss/home.scss";
import gsap from "gsap";

(function () {
  const hamburger = document.querySelector("[data-js-hamburger]");
  const hamburgerClose = document.querySelector("[data-js-hamburger-close]");

  const tl = gsap.timeline({ paused: true });
  tl.set("[data-main-navigation]", {
    display: "block",
  })
    .from("[data-main-navigation]", {
      duration: 0.4,
      yPercent: -100,
    })
    .from("[data-navigation-topbar]", {
      duration: 0.4,
      autoAlpha: 0,
    })
    .from(
      "[data-feature-row]",
      {
        duration: 0.4,
        autoAlpha: 0,
        y: 20,
      },
      "-=0.4"
    )
    .from(
      "[data-menu-row]",
      {
        duration: 0.4,
        autoAlpha: 0,
        y: 20,
      },
      "-=0.4"
    )
    .from(
      "[data-location-row]",
      {
        duration: 0.4,
        autoAlpha: 0,
        y: 20,
      },
      "-=0.4"
    );

  hamburger.addEventListener("click", () => {
    tl.play();
  });

  hamburgerClose.addEventListener("click", () => {
    tl.reverse();
  });

  document.addEventListener("DOMContentLoaded", () => {
    overlayAnimation();
  });

  // const toggleDisabled = (el) => {
  //   el.setAttribute("disabled", true);
  //   setTimeout(() => {
  //     el.removeAttribute("disabled");
  //   }, 800);
  // };
})();

// const openNavigation = () => {
//   const tl = gsap.timeline();
//   tl.set("[data-main-navigation]", {
//     display: "block",
//   })
//     .to("[data-main-navigation]", {
//       duration: 0.6,
//       ease: "power4.ease",
//       y: 0,
//     })
//     .to("[data-main-navigation]", {
//       duration: 0.6,
//       ease: "expo.in",
//       y: 0,
//     });
//   // .from("[data-navigation-topbar", {
//   //   duration: 0.4,
//   //   y: "-100%",
//   //   autoAlpha: 0,
//   // });
// };

// const closeNavigation = () => {
//   const tl = gsap.timeline();
//   tl.to("[data-main-navigation]", {
//     duration: 0.6,
//     ease: "power4.ease",
//     y: "-100%",
//   }).set("[data-main-navigation]", {
//     display: "none",
//   });
//   // .to("[data-main-navigation]", {
//   //   duration: 0.6,
//   //   ease: "expo.in",
//   //   y: "-100%",
//   // })
//   // .to("[data-main-navigation]", {
//   //   duration: 0,
//   //   css: { display: "none" },
//   // });
// };

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
    .from("[data-hero-img]", {
      duration: 1.4,
      ease: "power4.out",
      xPercent: 100,
      autoAlpha: 0,
    })
    .from(
      "[data-header-navbar]",
      {
        duration: 1,
        autoAlpha: 0,
      },
      "-=1"
    )
    .to(
      "[data-subheading-line-text]",
      {
        duration: 0.5,
        ease: "power4.out",
        y: 0,
        autoAlpha: 1,
        stagger: { amount: 0.4 },
      },
      "-=1"
    )
    .to(
      "[data-color-box]",
      {
        duration: 1,
        xPercent: 101,
        ease: "power4.out",
        stagger: { amount: 0.4 },
      },
      "-=1"
    )
    .to("[data-color-box]", {
      duration: 0,
      css: { display: "none" },
    })
    .to(
      "[data-hero-cta]",
      {
        duration: 0.5,
        autoAlpha: 1,
      },
      "-=1"
    );
};

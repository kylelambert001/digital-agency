import "../scss/home.scss";
import gsap from "gsap";

const tl = gsap.timeline();

tl.from(".overlay__line", {
  duration: 1.5,
  y: "100vh",
  ease: "expo.in",
})
  .to(".overlay__line", {
    duration: 0,
    opacity: 0,
  })
  .to(".overlay__left", {
    duration: 1,
    x: "-50vw",
    ease: "expo.in",
  })
  .to(
    ".overlay__right",
    {
      duration: 1,
      x: "50vw",
      ease: "expo.in",
    },
    "-=1"
  )
  .to(".overlay", {
    duration: 0,
    css: {
      display: "none",
    },
  });

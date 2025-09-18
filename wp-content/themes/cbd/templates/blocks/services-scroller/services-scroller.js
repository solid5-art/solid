document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".services-scroller") &&
    (!(function e() {
      if (windowWidth <= 1199) return;
      let t = document.querySelectorAll(".services-scroller");
      document.querySelector("header").offsetHeight,
        t.forEach((e, t) => {
          e.querySelector(".subtitle");
          let r = e.querySelectorAll(".service");
          gsap.utils.toArray(r).forEach((e, t) => {
            setTimeout(() => {
              let t = e.querySelector(".service-heading");
              e.querySelector(".service-content video");
              let r = parseFloat(
                window.getComputedStyle(e).getPropertyValue("padding-top"),
              );
              ScrollTrigger.create({
                trigger: e,
                start: "top top",
                end: () => `+=${e.offsetHeight - t.offsetHeight - r}`,
                pin: t,
                invalidateOnRefresh: !0,
              }),
                gsap.fromTo(
                  e,
                  { opacity: 0 },
                  {
                    opacity: 1,
                    scrollTrigger: {
                      trigger: e,
                      start: "top 75%",
                      end: `+=${0.4 * window.innerHeight}`,
                      scrub: !0,
                      toggleActions: "play none none none",
                    },
                  },
                );
            }, 100);
          });
        });
    })(),
    window.addEventListener("resize", function () {}),
    screen.orientation.addEventListener("change", function () {}));
});
